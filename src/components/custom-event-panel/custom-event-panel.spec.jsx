import React from 'react';
import renderer from 'react-test-renderer';

import CustomEventPanel from './custom-event-panel';

jest.mock('@storybook/api', () => ({
  __esModule: true,
  useParameter: () => null,
}));

jest.mock('@storybook/components', () => ({
  __esModule: true,
  TableWrapper: ({ children }) => <div>{children}</div>,
  ResetWrapper: ({ children }) => <div>{children}</div>,
  Icons: ({ children }) => <div>{children}</div>,
  Button: ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe('CustomEventPanel', () => {
  test('should render', () => {
    const tree = renderer.create(<CustomEventPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
