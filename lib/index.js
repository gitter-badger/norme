import { CLIEngine } from 'eslint'
import rc from './rc'

/**
 * Manage a lint state for one or several files.
 */
export default class Norme {

  /**
   * @param {String=} files - the input files/dir to lint
   * @param {Object=} options - allow to override the CLIEngine options
   */
  constructor(files, options = {}) {
    const { parserOptions, env, rules } = rc()
    const cli = new CLIEngine(Object.assign({
      cwd: process.cwd(),
      extensions: ['.js', '.jsx'],
      parserOptions,
      envs: Object.keys(env),
      rules,
      useEslintrc: false,
    }, options))
    const { results, errorCount, warningCount } = cli.executeOnFiles(files)
    Object.assign(this, { results, errorCount, warningCount })
  }

  /**
   * Generate a report as a string.
   * @param {String=} formatter - the formatter to use
   * @return {String} - the report
   */
  toString(formatter = 'stylish') {
    return CLIEngine.getFormatter(formatter)(this.results)
  }

}
