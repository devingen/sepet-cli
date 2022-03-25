import {expect, test} from '@oclif/test'

describe('upload', () => {
  test
    .stdout()
    .command(['upload'])
    .it('should require -b', ctx => {
      expect(ctx.stdout).to.contain('Bucket is required. -b --bucket')
    })
})
