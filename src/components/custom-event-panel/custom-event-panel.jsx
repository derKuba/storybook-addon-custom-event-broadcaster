import React from "react";

import { TableWrapper, ResetWrapper, Icons } from "@storybook/components";

import CustomEventRow from "../custom-event-row/custom-event-row";
import { FlexedBox, IconBox } from "../../styled-components/boxes";

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
          <CustomEventRow />
          <tr>
            <td>
              hello
              <FlexedBox>
                <IconBox>
                  <Icons icon={"add"} />
                </IconBox>
                <span>Add new Line</span>
              </FlexedBox>
            </td>
          </tr>
        </tbody>
      </TableWrapper>
    </ResetWrapper>
  );
};

export default CustomEventPanel;
