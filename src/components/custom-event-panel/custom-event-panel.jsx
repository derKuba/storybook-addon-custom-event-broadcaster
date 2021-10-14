import React from "react";
import { styled } from "@storybook/theming";

import {
  Button,
  TableWrapper,
  ResetWrapper,
  Icons,
} from "@storybook/components";

const FlexedBox = styled.div({
  display: "flex",
});

const IconBox = styled.div({
  width: "25px",
  height: "25px",
});

const CustomEventPanel = () => {
  const args = {};
  return (
    <ResetWrapper>
      <TableWrapper inAddonPanel>
        <thead>
          <tr>
            <th>EventName</th>
            <th>Data</th>
            <th>(opt.) Selector</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text"></input>
            </td>
            <td>
              <input type="text"></input>
            </td>
            <td>
              <FlexedBox>
                <IconBox>
                  <Icons icon={"add"} />
                </IconBox>
                <span>Add Selektor</span>
              </FlexedBox>
            </td>
            <td>
              <Button primary>FIRE</Button>
            </td>
          </tr>
          <tr>
            <FlexedBox>
              <IconBox>
                <Icons icon={"add"} />
              </IconBox>
              <span>Add new Line</span>
            </FlexedBox>
          </tr>
        </tbody>
      </TableWrapper>
    </ResetWrapper>
  );
};

export default CustomEventPanel;
