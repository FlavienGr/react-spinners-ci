import React from "react";
import { storiesOf } from "@storybook/react";
import { Ring } from "../src/index";

storiesOf("React-spinners", module).add("Ring", () => {
  return (
    <div>
      <Ring />
    </div>
  );
});
