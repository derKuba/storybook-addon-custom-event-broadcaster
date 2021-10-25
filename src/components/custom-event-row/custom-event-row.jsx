import React, { useState, memo } from "react";

import { Button, Icons } from "@storybook/components";

import { FlexedBox, IconBox } from "../../styled-components/boxes";

import { StyledInput, StyledTextarea } from "../../styled-components/input";

const fireEvent = (eventName, eventData, selector = "") => {
  const data = eventData ? eventData : null;

  try {
    const parsedData = JSON.parse(JSON.stringify(data));
    if (selector.length > 0) {
      document
        .getElementById("storybook-preview-iframe")
        // the preview is inside a iframe
        .contentWindow.document.querySelector(selector)
        .dispatchEvent(new CustomEvent(eventName, parsedData));
    } else {
      document
        .getElementById("storybook-preview-iframe")
        // the preview is inside a iframe
        .contentWindow.document.dispatchEvent(
          new CustomEvent(eventName, parsedData)
        );
    }
  } catch (error) {
    console.log("Selector not found", error);
  }
};

const CustomEventRow = memo(
  ({ selectorDefault = "", eventNameDefault = "", eventDataDefault = "" }) => {
    const [displaySelector, setDisplaySelector] = useState(false);
    const [selector, setSelector] = useState(selectorDefault);
    const [eventName, setEventName] = useState(eventNameDefault);
    const [eventData, setEventData] = useState(eventDataDefault);

    const displaySelectInput = () => {
      setDisplaySelector(true);
    };

    let parsedData = null;
    try {
      parsedData = eventData ? JSON.stringify(eventData) : "";
    } catch (_) {
      parsedData = "INVALID JSON";
    }

    return (
      <tr>
        <td>
          <StyledInput type="text" value={eventName}></StyledInput>
        </td>
        <td>
          <StyledTextarea value={parsedData}></StyledTextarea>
        </td>
        <td>
          <FlexedBox>
            {displaySelector === false && selector.length === 0 ? (
              [
                <IconBox key="iconBox">
                  <Icons icon={"add"} onClick={displaySelectInput} />
                </IconBox>,
                <span key="selectorText">Add Selektor</span>,
              ]
            ) : (
              <StyledTextarea value={selector}></StyledTextarea>
            )}
          </FlexedBox>
        </td>
        <td>
          <Button
            primary
            onClick={() => fireEvent(eventName, eventData, selector)}
          >
            FIRE
          </Button>
        </td>
      </tr>
    );
  }
);

export default CustomEventRow;
