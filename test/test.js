/* global describe, it */
'use strict'

const expect = require('chai').expect
const haveMinimumDensity = require('../index')

describe('#haveMinimumDensity()', () => {
  it('should return true with an empty string and an empty check.', () => {
    const str = ''
    const checks = []
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with an empty string and a check with 0 minimum.', () => {
    const str = ''
    const checks = [['a', 0]]
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return false with an empty string and a check that is not met.', () => {
    const str = ''
    const checks = [['a', 1]]
    const result = haveMinimumDensity(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return false with a check that is not met.', () => {
    const str = 'aaaabbbb'
    const checks = [['z', 1]]
    const result = haveMinimumDensity(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return true with a check that is met exactly.', () => {
    const str = 'aaaabbbb'
    const checks = [['a', 0.5]]
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with a check that is more than met.', () => {
    const str = 'aaaabbbb'
    const checks = [['a', 0.25]]
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return false with many checks that are not met.', () => {
    const str = 'aaaabbbbccccdddd'
    const checks = [['z', 0.5], ['?', 0.1], ['b', 0.5]]
    const result = haveMinimumDensity(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return false with some checks that are not met.', () => {
    const str = 'aaaabbbbccccdddd'
    const checks = [['a', 0.25], ['?', 0.1], ['b', 0.5]]
    const result = haveMinimumDensity(str, checks)
    const expected = false
    expect(result).to.equal(expected)
  })

  it('should return true with checks that are met exactly.', () => {
    const str = 'aaaabbbbccccdddd'
    const checks = [['a', 0.25], ['b', 0.25], ['c', 0.25], ['d', 0.25]]
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return true with checks that are more than met.', () => {
    const str = 'aaaabbbbccccdddd'
    const checks = [['a', 0.1], ['b', 0.2], ['c', 0.05], ['d', 0.02]]
    const result = haveMinimumDensity(str, checks)
    const expected = true
    expect(result).to.equal(expected)
  })
})
