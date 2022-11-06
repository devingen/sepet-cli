import {Command, Flags} from '@oclif/core'
import * as FormData from 'form-data'
import * as fs from 'node:fs'
import {glob} from 'glob'
import {request as httpRequest} from 'node:http'
import {request as httpsRequest} from 'node:https'

export default class Index extends Command {
  static description = 'Uploads files to Sepet.'

  static examples = [
    '$ sepet update-version -i bucket-id-here 1.2.3',
  ]

  static flags = {
    help: Flags.help({char: 'h'}),
    // flag with a value (-b, --bucket=VALUE)
    id: Flags.string({char: 'i', description: 'bucket id to update.'}),
    // flag with a value (-e, --endpoint=VALUE)
    endpoint: Flags.string({char: 'e', description: 'sepet API endpoint to upload the file.'}),
    // flag with a value (-p, --port=VALUE)
    port: Flags.string({char: 'p', description: 'sepet API port.'}),
    // flag with a value (-H, --headers=VALUE)
    headers: Flags.string({
      char: 'H',
      description: 'headers to sent to sepet API. Key value pairs must be separated by = and joined by ;',
      multiple: true,
    }),
  }

  static args = [{name: 'version'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Index)

    if (!flags.id) {
      this.log('Bucket ID is required. -i --id')
      return
    }

    const version = args.version
    if (!version || version === '') {
      this.log('Version is not specified.')
      return
    }

    const endpoint = flags.endpoint || 'api.sepet.devingen.io'
    const port = flags.port || '443'
    const headers = flags.headers || []

    if (flags.port) {
      this.log(`API: ${endpoint}:${port}`)
    } else {
      this.log(`API: ${endpoint}`)
    }

    await updateBucket(endpoint, port, headers, flags.id, version).catch(error => {
      this.log(`Updating bucket failed: ${error}`)
    }).then(() => {
      this.log(`Version is updated to ${version}`)
    })
  }
}

const updateBucket = (host: string, port: string, headers: string[], bucketId: string, version: string): Promise<any> => new Promise<any>((resolve, reject) => {

  const postData = JSON.stringify({ version });

  const requestHeaders: any = {
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
  headers.forEach(couple => {
    // split only until the first occurrence of '='
    const parts = couple.split(/=(.*)/s)
    requestHeaders[parts[0]] = parts[1]
  })

  const request = port === '443' ? httpsRequest : httpRequest
  const req = request(
    {
      host: host,
      port: port,
      path: `/buckets/${bucketId}`,
      method: 'PUT',
      headers: requestHeaders,
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
        const body = data ? JSON.parse(data) : {};
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
  req.write(postData);
  req.end()
})

