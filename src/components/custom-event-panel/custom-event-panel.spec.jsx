import React from "react";
import { shallow } from "enzyme";

import CustomEventPanel from "./custom-event-panel";

jest.mock("@storybook/api", () => ({
  __esModule: true,
  useParameter: () => null,
}));

describe("CustomEventPanel", () => {
  test("should render", () => {
    const wrapper = shallow(<CustomEventPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
