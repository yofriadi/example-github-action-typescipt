import * as core from '@actions/core'

const run = async (): Promise<void> => {
  core.debug('Hello! You are an amazing person!')
}

run()

export default run
