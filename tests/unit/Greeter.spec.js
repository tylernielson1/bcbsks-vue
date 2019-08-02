import Vue from 'vue';
import Greeter from '../../src/components/Greeter';

it('should have a data() function', () => {
  expect(typeof Greeter.data).toBe('function');
});

it('should say "Hello, Adam".', () => {
  // const vm = new Vue(Greeter).$mount();
  const customVue = Vue.extend(Greeter);
  const vm = new customVue({
    propsData: {
      name: 'Adam',
    },
  }).$mount();

  const text = vm.$el.textContent;
  expect(text).toBe('Hello, Adam');
  expect(text).toContain('Adam');
  expect(text).toMatch(/A[A-z]{2,}m/i);
});
