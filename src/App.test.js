import React from 'react'
import App from './App';
import { shallow } from 'enzyme'

test('renders without crashing', () => {
    const wrapper = shallow(<App />)
})