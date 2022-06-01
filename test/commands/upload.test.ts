import {expect, test} from '@oclif/test'

describe('upload', () => {
  test
  .stdout()
  .command(['upload'])
  .it('Fails with bucket missing error.', ctx => {
    expect(ctx.stdout).to.contain('Bucket is required. -b --bucket')
  })

  test
  .stdout()
  .command(['upload', '--bucket', 'devingen-io'])
  .it('Fails with folder missing error.', ctx => {
    expect(ctx.stdout).to.contain('Folder is not specified.')
  })
})
