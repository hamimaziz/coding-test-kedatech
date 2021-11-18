import { createWrapper  } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

const Constructor = Vue.extend(HelloWorld)
const vm = new Constructor().$mount()
const wrapper = createWrapper(vm)

describe('HelloWorld.vue', () => {  
  it('Test Radio Multiple 1', async () => {
    await setTimeout(() => {}, 0)
    const models = [
      { val: 'test input 1' }, 
      { val: 'test input 2' }, 
      { val: 'test input 3' }
    ]
    const radioButton = await wrapper.find('#radio-input-multiple-1')
    models.forEach(async (model, id) => {
      let input1 = await wrapper.find(`#multiple-input-${id + 1}`)
      await input1.setValue(model.val)
    })
    const result = wrapper.find('#result-4')
    
    await radioButton.trigger('click')
    expect(JSON.parse(result.text())).toEqual(models)
  })

  it('Test Radio Multiple 2', async () => {
    await setTimeout(() => {}, 0)
    const models = [
      { val: 'test input 4' }, 
      { val: 'test input 5' }, 
      { val: 'test input 6' }
    ]
    const radioButton = await wrapper.find('#radio-input-multiple-2')
    models.forEach(async (model, id) => {
      let input1 = await wrapper.find(`#multiple-input-${id + 4}`)
      await input1.setValue(model.val)
    })
    const result = wrapper.find('#result-4')
    
    await radioButton.trigger('click')
    expect(JSON.parse(result.text())).toEqual(models)
  })

})
