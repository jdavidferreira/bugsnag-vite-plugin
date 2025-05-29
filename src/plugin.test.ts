import { getPlugin } from './plugin'
import { test, expect } from 'vitest'

test('getPlugin', () => {
  expect(getPlugin()).toBe(null)
})
