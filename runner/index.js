import { readdirSync, readFileSync } from 'fs'
import { execSync } from 'child_process'

function loadJson (file) {
  return JSON.parse(readFileSync(file))
}

const benches = []
const benchesUrl = new URL('../benchmark/', import.meta.url)

for (const folder of readdirSync(benchesUrl)) {
  const path = new URL(folder, benchesUrl).pathname
  benches.push(Object.assign({ path: path }, loadJson(new URL(`${folder}/meta.json`, benchesUrl))))
}

for (const bench of benches) {
  if (bench.build) {
    console.log('Preparing benchmark of %s (%s, pure: %s)', bench.name, bench.language, bench.pure)
    for (const buildTask of bench.build) {
      console.debug('  running: %s', buildTask)
      execSync(buildTask, { cwd: bench.path })
    }
  }

  console.log('Benchmarking %s', bench.name)
  console.debug('  running: %s', bench.run)
  execSync(bench.run, { cwd: bench.path, stdio: 'inherit' })

  console.log('Benchmark of %s complete\n', bench.name)
}

console.log('Done')
