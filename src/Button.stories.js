import React from "react";
import { withInfo } from "@storybook/addon-info";
import { wInfo } from "./utils";
import { storiesOf, addDecorator } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Button } from "./Button";

addDecorator(withInfo);
storiesOf("Button", module)
  .addParameters({
    info: wInfo()
  })
  .addWithJSX("with golden background", () => (
    <Button bg={text("bg", "gold")}>Hello World, I am Golden</Button>
  ))
  .addWithJSX("with yellow background", () => (
    <Button disabled={boolean("disabled", false)}>
      {text("text", "Hello world")}
    </Button>
  ));
