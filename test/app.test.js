import 'babel-polyfill'

import {App} from '../client/index.tsx'
import React from 'react'
import axios from 'axios'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({adapter: new Adapter()})

jest.mock('axios')
axios.get.mockResolvedValue({data: [
  {
    "id": 1,
    "name": "robot 1",
    "configuration": {
      "hasSentience": true,
      "hasWheels": true,
      "hasTracks": true,
      "numberOfRotors": 1,
      "Colour": "red"
    },
    "statuses": ["on fire", "rusty", "loose screws", "paint scratched"]
  }
]});


test('App render starting state', () => {
  const component = shallow(<App/>)
  expect(component).toMatchSnapshot()
});

test('App render loaded state', async () => {
  const component = await shallow(<App/>)
  component.update()
  expect(component).toMatchSnapshot()
});
