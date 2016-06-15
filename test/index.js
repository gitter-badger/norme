import Norme from '..'
import test from 'ava'

test.cb('Norme.toString should return nothing when there is no errors', (t) => {
  t.plan(1)
  const norme = new Norme([`${__dirname}/fixtures/ok`])
  const ret = norme.toString()
  t.is(ret.length, 0)
  t.end()
})

test.cb('Norme.toString should return something when there are errors', (t) => {
  t.plan(1)
  const norme = new Norme([`${__dirname}/fixtures/ko`])
  const ret = norme.toString()
  t.not(ret.length, 0)
  t.end()
})
