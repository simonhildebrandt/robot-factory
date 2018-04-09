import {plus} from '../client/rand'
import {amanda, Thing} from '../client/index.tsx'
import renderer from 'react-test-renderer'
import React from 'react'


test('adds 1 to 5 to get 6', () => {
  expect(plus(5)).toBe(6);
});

test('amanda function', () => {
  expect(amanda('x')).toBe('x');
});

test('thing render', () => {
  const component = renderer.create(<Thing x={3}/>)
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
