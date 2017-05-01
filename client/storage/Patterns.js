'use strict'

import {ipcRenderer} from 'electron'

export function get() {
  return JSON.parse(localStorage.getItem('patternStore')) || {}
}

export function set(patterns) {
  localStorage.setItem('patternStore', JSON.stringify(patterns))
  ipcRenderer.send('dispatch', 'reloadPatterns')
  return patterns
}
