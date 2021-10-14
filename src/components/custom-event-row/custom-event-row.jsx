import React, { useState, memo } from "react";

import { Button, Icons } from "@storybook/components";

import { FlexedBox, IconBox } from "../../styled-components/boxes";

import { StyledInput, StyledTextarea } from "../../styled-components/input";

const CustomEventRow = memo(() => {
  const [displaySelector, setDisplaySelector] = useState(false);

  const displaySelectInput = () => {
    setDisplaySelector(true);
  };

  return (
    <tr>
      <td>
        <StyledInput type="text"></StyledInput>
      </td>
      <td>
        <StyledTextarea></StyledTextarea>
      </td>
      <td>
        <FlexedBox>
          {displaySelector === false ? (
            [
              <IconBox key="iconBox">
                <Icons icon={"add"} onClick={displaySelectInput} />
              </IconBox>,
              <span key="selectorText">Add Selektor</span>,
            ]
          ) : (
            <StyledTextarea></StyledTextarea>
          )}
        </FlexedBox>
      </td>
      <td>
        <Button primary>FIRE</Button>
      </td>
    </tr>
  );
});

export default CustomEventRow;
