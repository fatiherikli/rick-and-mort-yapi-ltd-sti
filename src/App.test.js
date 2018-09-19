import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './pages/home';
import Episode from './pages/episode';
import Character from './atomic/Character';

configure({ adapter: new Adapter() });

describe('Pages', () => {
  it('Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <Home autoload={ false } />
      </MemoryRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Detail', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <Episode autoload={ false } />
      </MemoryRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Atomic', () => {
  it('Character', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
        <Character autoload={ false } />
      </MemoryRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});