import * as React from 'react';
import renderer from 'react-test-renderer';
import { Page } from './Page';

describe('tx:Page', () => {
  it('renders without crashing', () => {
    renderer.create(<Page/>);
  });
});