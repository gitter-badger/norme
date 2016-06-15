import Norme from './'

/**
 * Process CLI arguments and execute the Norme engine. Output the results to the
 * standard output and exit with the number of errors.
 * @param {String[]} argv - the process arguments
 * @return {undefined}
 */
export default (argv) => {
  const args = argv.slice(2)
  const files = args.length > 0 ? args : ['bin', 'lib', 'src', 'test']
  const norme = new Norme(files)
  console.log(norme.toString()) // eslint-disable-line no-console
  process.exit(norme.errorCount) // eslint-disable-line no-process-exit
}
