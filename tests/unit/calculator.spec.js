import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

it('Add 1 to 4', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 4
  wrapper.vm.add('1');
  expect(wrapper.vm.runningTotal).to.equal(5)
})

it('Subtract 4 from 7', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 7
  wrapper.vm.subtract('4');
  expect(wrapper.vm.runningTotal).to.equal(3)
})

it('Multiply 3 by 5', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 3
  wrapper.vm.multiply('5');
  expect(wrapper.vm.runningTotal).to.equal(15)
})

it('Divide 21 by 7', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 21
  wrapper.vm.divide('7');
  expect(wrapper.vm.runningTotal).to.equal(3)
})

it('Concatenate number clicks', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 0
  wrapper.vm.numberClick('6');
  wrapper.vm.numberClick('5');
  expect(wrapper.vm.runningTotal).to.equal(65)
})

it('Concatenate operator clicks', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 0
  wrapper.vm.numberClick(1);
  wrapper.vm.operatorClick('*');
  wrapper.vm.numberClick(5);
  wrapper.vm.operatorClick('-');
  wrapper.vm.numberClick(2);
  wrapper.vm.operatorClick('=');
  expect(wrapper.vm.runningTotal).to.equal(3)
})

it('Clear click', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 0
  wrapper.vm.numberClick(1);
  wrapper.vm.operatorClick('*');
  wrapper.vm.numberClick(5);
  wrapper.vm.clearClick();
  wrapper.vm.numberClick(2);
  wrapper.vm.operatorClick('=');
  expect(wrapper.vm.runningTotal).to.equal(2)
})
