
import { getActiveEffect } from './effect';
let bucket = new Set()
export function reactive(target: object) {
  const obj = new Proxy(target, {
    get(target, key, receiver) {
      // 存储effect内产生触发getter的函数
      bucket.add(getActiveEffect())
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      // 调用之前存储的effect内的函数
      bucket.forEach(fn => fn())
      return true
    }
  })
  return obj
}