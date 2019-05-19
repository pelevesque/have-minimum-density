'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  let result = true
  for (let i = 0; i < checks.length; i++) {
    if (
      substrOccurrence(checks[i][0], str) / str.length < checks[i][1] ||
      (str.length === 0 && checks[i][1] > 0)
    ) {
      result = false
      break
    }
  }
  return result
}
