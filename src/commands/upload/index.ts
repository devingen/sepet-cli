import {Command, Flags} from '@oclif/core'
import * as FormData from 'form-data'
import * as fs from 'node:fs'
import {glob} from 'glob'
import {request} from 'node:https'

export default class Index extends Command {
  static description = 'Uploads files to Sepet.'

  static examples = [
    '$ sepet upload -b bucket-name-here .',
    '$ sepet upload -b bucket-name-here ./tsconfig.json',
    '$ sepet upload -b bucket-name-here ./src/commands',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // flag with a value (-b, --bucket=VALUE)
    bucket: Flags.string({char: 'b', description: 'bucket name that is used as subdomain.'}),
    // flag with a value (-v, --version=VALUE)
    version: Flags.string({char: 'v', description: 'bucket version to upload to.'}),
    // flag with a value (-e, --endpoint=VALUE)
    endpoint: Flags.string({char: 'e', description: 'sepet API endpoint to upload the file.'}),
    // flag with a value (-p, --port=VALUE)
    port: Flags.string({char: 'p', description: 'sepet API port.'}),
  }

  static args = [{name: 'path'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Index)

    if (!flags.bucket) {
      this.log('Bucket is required. -b --bucket')
      return
    }

    let path = args.path
    if (!path || path === '') {
      this.log('Folder is not specified.')
      return
    }

    const endpoint = flags.endpoint || 'api.sepet.devingen.io'
    const port = flags.port || '443'

    if (flags.port) {
      this.log(`Uploading to ${endpoint}:${port}`)
    } else {
      this.log(`Uploading to ${endpoint}`)
    }

    const version = flags.version || 'default'
    if (flags.version) {
      this.log(`Uploading to version ${version}`)
    }

    if (path.indexOf('.') === 0) {
      // user passed a relative path like '.' './src' './src/commands'
      // build the complete path by adding the current path as prefix
      path = `${process.cwd()}${path.slice(1)}`
    }

    const isDirectory = fs.lstatSync(path).isDirectory()

    if (isDirectory) {
      // upload all files recursively
      this.log(`Uploading from ${path}`)

      let pathNamePrefixLength = path.length
      if (!path.endsWith('/')) {
        // path may end with / when the remaining '/' is passed with the file name like './src/' instead of './src'
        pathNamePrefixLength += 1
      }

      const files = await getFiles(path)

      for (const filePath of files) {
        if (!fs.statSync(filePath).isFile()) {
          continue
        }

        const clearFileName = filePath.slice(Math.max(0, pathNamePrefixLength))
        this.log(clearFileName)

        // eslint-disable-next-line no-await-in-loop
        await uploadFile(endpoint, port, flags.bucket, version, clearFileName, filePath).catch(error => {
          this.error(`Uploading file failed: ${error}`)
        })
      }
    } else {
      // upload single file
      const clearFileName = path.slice(Math.max(0, path.lastIndexOf('/') + 1))
      this.log(clearFileName)

      await uploadFile(endpoint, port, flags.bucket, version, clearFileName, path).catch(error => {
        this.error(`Uploading file failed: ${error}`)
      })
    }
  }
}

function getFiles(path: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    glob(path + '/**/*', {}, function (err, files) {
      if (err) {
        reject(err)
        return
      }

      resolve(files)
    })
  })
}

const uploadFile = (host: string, port: string, bucket: string, version: string, fileName: string, filePath: string): Promise<any> => new Promise<any>((resolve, reject) => {
  const form = new FormData()
  form.append(fileName, fs.createReadStream(filePath) as any)

  const req = request(
    {
      host: host,
      port: port,
      path: `/${bucket}`,
      method: 'POST',
      headers: {
        ...form.getHeaders(),
        'Bucket-Version': version,
      },
    },
    response => {
      let data = ''

      // A chunk of data has been received.
      response.on('data', chunk => {
        data += chunk
      })
      response.on('error', error => {
        reject(error)
      })
      response.on('end', () => {
        const body = JSON.parse(data)
        if (response.statusCode === 200) {
          resolve(body)
        } else {
          reject(body.error || body)
        }

        resolve(body)
      })
    },
  ).on('error', error => {
    reject(error)
  })
  form.pipe(req)

  // req.end()
})

