import { reactive, effect } from "../src";
import { describe, it, expect } from 'vitest'

describe('响应式测试', () => {
  it('测试 reactive 和 effect', () => {

    const obj = reactive({
      name: 'world'
    })
    let dummy
    effect(() => {
      dummy = obj.name
    })
    expect(dummy).toBe('world')
    obj.name = 'vue3'
    expect(dummy).toBe('vue3')
    obj.name = 'vue3 done'
    expect(dummy).toBe('vue3 done')
  })
})