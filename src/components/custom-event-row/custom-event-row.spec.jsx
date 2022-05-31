import React from 'react';
import renderer from 'react-test-renderer';

import CustomEventRow from './custom-event-row';

jest.mock('@storybook/components', () => ({
  __esModule: true,
  Icons: ({ children }) => <div>{children}</div>,
  Button: ({ onClick, children }) => {
    console.log(onClick, children);
    return <button onClick={onClick}>{children}</button>;
  },
}));

const dispatchMock = jest.fn();
global.document.getElementById = () => ({
  contentWindow: {
    document: {
      querySelector: () => ({
        dispatchEvent: dispatchMock,
      }),
      dispatchEvent: dispatchMock,
    },
  },
});

describe('CustomEventRow', () => {
  test('should render', () => {
    const tree = renderer
      .create(
        <CustomEventRow
          selectorDefault=".test"
          eventNameDefault="test:event"
          eventDataDefault={null}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should click the button and send event with selector', () => {
    const tree = renderer.create(
      <CustomEventRow
        selectorDefault=".test"
        eventNameDefault="test:event"
        eventDataDefault={null}
      />,
    );

    tree.root.findByType('button').props.onClick();

    expect(dispatchMock).toBeCalled();
  });

  test('should click the button and send event without selector', () => {
    const tree = renderer.create(
      <CustomEventRow eventNameDefault="test:event" eventDataDefault={null} />,
    );

    tree.root.findByType('button').props.onClick();

    expect(dispatchMock).toBeCalled();
  });
});
