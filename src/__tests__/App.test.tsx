import React from 'react';
import render from 'react-test-renderer';
import App from '../../App';

describe('<App />', () => {
  it('has 1 child', () => {
    // @ts-ignore
    const tree = render.create(<App />).toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});
