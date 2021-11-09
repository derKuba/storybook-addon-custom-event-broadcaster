import React, { useState, memo } from "react";
import PropTypes from "prop-types";

import { Button, Icons } from "@storybook/components";

import {
  FlexedBox,
  IconBox,
  IconLabelBox,
} from "../../styled-components/boxes";

import { StyledInput, StyledTextarea } from "../../styled-components/input";

const fireEvent = (eventName, eventData, selector = "") => {
  const data = eventData || null;

  try {
    const parsedData = JSON.parse(data);

    const storyBookIframeDocument = document.getElementById(
      // the preview is inside a iframe
      "storybook-preview-iframe"
    ).contentWindow.document;

    if (selector.length > 0) {
      storyBookIframeDocument
        .querySelector(selector)
        .dispatchEvent(new CustomEvent(eventName, parsedData));
    } else {
      storyBookIframeDocument.dispatchEvent(
        new CustomEvent(eventName, parsedData)
      );
    }
  } catch (error) {
    console.log("Fire not successfull ", error); // eslint-disable-line no-console
  }
};

const CustomEventRow = memo(
  ({ selectorDefault = "", eventNameDefault = "", eventDataDefault = {} }) => {
    const [displaySelector, setDisplaySelector] = useState(false);
    const [selector, setSelector] = useState(selectorDefault);
    const [eventName, setEventName] = useState(eventNameDefault);
    const [eventData, setEventData] = useState(eventDataDefault);

    const displaySelectInput = () => {
      setDisplaySelector(true);
    };

    const handleSelectorChange = (event) => {
      setSelector(event.target.value);
    };

    const handleEventNameChange = (event) => {
      setEventName(event.target.value);
    };

    const handleDataChange = (event) => {
      setEventData(event.target.value);
    };

    return (
      <tr>
        <td>
          <StyledInput
            type="text"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </td>
        <td>
          <StyledTextarea value={eventData} onChange={handleDataChange} />
        </td>
        <td>
          <FlexedBox>
            {displaySelector === false && selector.length === 0 ? (
              [
                <IconBox key="iconBox" key="icon">
                  <Icons icon="add" onClick={displaySelectInput} />
                </IconBox>,
                <IconLabelBox key="icon_label">
                  <span key="selectorText">Add Selektor</span>
                </IconLabelBox>,
              ]
            ) : (
              <StyledTextarea
                value={selector}
                onChange={handleSelectorChange}
              />
            )}
          </FlexedBox>
        </td>
        <td>
          <Button
            primary
            onClick={() => fireEvent(eventName, eventData, selector)}
          >
            send
          </Button>
        </td>
      </tr>
    );
  }
);

CustomEventRow.propTypes = {
  selectorDefault: PropTypes.string,
  eventNameDefault: PropTypes.string.isRequired,
  eventDataDefault: PropTypes.string,
};

CustomEventRow.defaultProps = {
  selectorDefault: "",
  eventNameDefault: "",
  eventDataDefault: "",
};

export default CustomEventRow;
