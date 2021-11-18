import { createWrapper  } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

const Constructor = Vue.extend(HelloWorld)
const vm = new Constructor().$mount()
const wrapper = createWrapper(vm)

describe('HelloWorld.vue', () => {  
  it('Test Radio Button A 2', async () => {
    const msg = 'Radio A'
    const radioButton = await wrapper.find('#radio-a-2')
    const result = wrapper.find('#result-2')
    
    await radioButton.trigger('click')
    expect(result.text()).toContain(msg)
  })
  
  it('Test Radio Button B 2', async () => {
    const msg = 'Radio B'
    const radioButton = wrapper.find('#radio-b-2')
    const result = wrapper.find('#result-2')
    
    await radioButton.trigger('click')
    expect(result.text()).toContain(msg)
  })
  
  it('Test Radio Button C 2', async () => {
    const msg = 'Radio C'
    const radioButton = wrapper.find('#radio-c-2')
    const result = wrapper.find('#result-2')
    
    await radioButton.trigger('click')
    expect(result.text()).toContain(msg)
  })

})
