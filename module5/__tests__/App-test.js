import React from "react";
import App from "../App";
import { mount, shallow } from "enzyme";

it("renders correctly", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find("View").exists()).toBe(true);
});
