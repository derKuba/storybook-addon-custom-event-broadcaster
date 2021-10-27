import React from "react";
import renderer from "react-test-renderer";

const mockedModule = ({ children }) => {
  return <div>{children}</div>;
};

jest.mock("@storybook/api", () => ({
  __esModule: true,
  useParameter: () => null,
}));

jest.mock("@storybook/components", () => ({
  __esModule: true,
  TableWrapper: ({ children }) => {
    return <div>{children}</div>;
  },
  ResetWrapper: ({ children }) => {
    return <div>{children}</div>;
  },
  Icons: ({ children }) => {
    return <div>{children}</div>;
  },
  Button: ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

import CustomEventPanel from "./custom-event-panel";

describe("CustomEventPanel", () => {
  test("should render", () => {
    const tree = renderer.create(<CustomEventPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
