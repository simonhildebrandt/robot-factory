import {App} from '../client/index.tsx'
import renderer from 'react-test-renderer'
import React from 'react'


test('App render', () => {
  const component = renderer.create(<App/>)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
