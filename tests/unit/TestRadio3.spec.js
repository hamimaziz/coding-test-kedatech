import { createWrapper  } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'

const Constructor = Vue.extend(HelloWorld)
const vm = new Constructor().$mount()
const wrapper = createWrapper(vm)

describe('HelloWorld.vue', () => {  
  it('Test Radio With Label', async () => {
    const msg = 'radio-button-with-label'
    const radioButton = await wrapper.find('#radio-with-label')
    const result = wrapper.find('#result-3')
    
    await radioButton.trigger('click')
    expect(result.text()).toContain(msg)
  })

  it('Test Radio Input Text', async () => {
    const msg = 'Coba input text'
    const radioButton = await wrapper.find('#radio-button-input-text')
    const input = await wrapper.find('#radio-input-text')
    const result = wrapper.find('#result-3')
    
    await input.setValue(msg)
    await radioButton.trigger('click')
    expect(result.text()).toContain(msg)
  })

  it('Test Radio Input Text', async () => {
    const msg = new Date()
    const radioButton = await wrapper.find('#radio-button-input-date-picker')
    const datepicker = await wrapper.find('#radio-date-picker')
    const input = await datepicker.find('input[type="text"]')
    const result = wrapper.find('#result-3')
    
    await input.setValue(msg)
    await radioButton.trigger('click')
    expect(new Date(result.text()).toLocaleDateString()).toContain(msg.toLocaleDateString())
  })

})
