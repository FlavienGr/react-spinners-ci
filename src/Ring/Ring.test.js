import React from "react";
import TestRenderer from "react-test-renderer"; // ES6
import { Ring } from "./index";

test("renders correctly", () => {
  const tree = TestRenderer.create(<Ring />).toJSON();
  expect(tree).toMatchSnapshot();
});
