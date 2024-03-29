import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers and get the correct answer', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should carry out subtraction with two numbers and get the correct answer', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply two numbers and get the correct answer', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide two numbers and get the correct answer', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divide = container.find('#operator-divide');
    const equals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const button9 = container.find('#number9');
    const button6 = container.find('#number6');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button1 = container.find('#number1');
    const button0 = container.find('#number0');
    const add = container.find('#operator_add');
    const multiply = container.find('#operator-multiply');
    const divide = container.find('#operator-divide');
    const subtract = container.find('#operator-subtract');
    button9.simulate('click');
    add.simulate('click');
    button6.simulate('click');
    multiply.simulate('click');
    button2.simulate('click');
    divide.simulate('click');
    button3.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    button0.simulate('click');
    add.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('0');
  })

  it('should clear the running total', () => {
    const button6 = container.find('#number6');
    const multiply = container.find('#operator-multiply');
    const button7 = container.find('#number7');
    const clear = container.find('#clear');
    button6.simulate('click');
    multiply.simulate('click');
    button7.simulate('click');
    clear.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('0');
  })

})

