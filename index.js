'use strict'

const substrOccurrence = require('substr-occurrence')

module.exports = (str, checks) => {
  let hasMinimumDensity = true
  for (let i = 0; i < checks.length; i++) {
    if (
      (substrOccurrence(checks[i][0], str) * checks[i][0].length) / str.length < checks[i][1] ||
      (str.length === 0 && checks[i][1] > 0)
    ) {
      hasMinimumDensity = false
      break
    }
  }
  return hasMinimumDensity
}
