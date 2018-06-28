import * as React from 'react';
import renderer from 'react-test-renderer';
import { SendForm } from './SendForm';

describe('tx:SendForm', () => {
  it('renders without crashing', () => {
    renderer.create(<SendForm/>);
  });
});