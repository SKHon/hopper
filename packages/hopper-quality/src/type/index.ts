
interface Context {
  taskId: number,
  hooks: {
    beforeInstall: Function,
    analysis: Function,
    afterAnalysis: Function,
    report: Function
  },
  stats: {},
  logger: {},
  fileStore: {
    files: {},
    diffFiles: {},
    diff: boolean,
    options: {
      root: string,
      exclude: Array<any>,
      include: Array<any>
    }
  },
  options: {
    root: string,
    argv: {},
    exclude: Array<string>,
    include: Array<string>,
    scripts: Array<string>,
    configs: {}
  },
  env: { domain: string, env: string },
  git: {
    git: any,
    env: string
  },
  rule: {
    setData: Function,
    getData: Function,
    setScore: Function,
    setMessage: Function,
    setErrorCount: Function,
    setWarnCount: Function
  }
}

export default Context