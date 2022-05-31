

let activeEffect = null
export function getActiveEffect() {
  return activeEffect
}
export function effect(fn){
  activeEffect = fn
  fn() // fn触发reactive的getter
}