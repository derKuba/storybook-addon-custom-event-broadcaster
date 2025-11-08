// src/components/CustomEventRow.tsx
import React, { useState, memo } from 'react';
import { Button } from 'storybook/internal/components';
import { AddIcon, TrashIcon } from '@storybook/icons';
import { styled } from 'storybook/theming';

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 100px;
  gap: 12px;
  padding: 16px;
  background: ${(props) => props.theme.background.content};
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.color.mediumdark};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

const StyledInput = styled.input`
  padding: 10px 12px;
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: 4px;
  background: ${(props) => props.theme.input.background};
  color: ${(props) => props.theme.input.color};
  font-size: 13px;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.secondary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.color.secondary};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.mediumdark};
  }
`;

const StyledTextarea = styled.textarea`
  padding: 10px 12px;
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: 4px;
  background: ${(props) => props.theme.input.background};
  color: ${(props) => props.theme.input.color};
  font-size: 13px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  resize: vertical;
  min-height: 80px;
  line-height: 1.6;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.secondary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.color.secondary};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.mediumdark};
  }
`;

const AddSelectorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  background: ${(props) => props.theme.background.content};
  border: 2px dashed ${(props) => props.theme.color.mediumdark};
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.color.defaultText};
  font-size: 12px;
  width: 100%;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    border-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.secondary};
    background: ${(props) => props.theme.background.hoverable};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const SendButton = styled(Button)`
  height: 40px;
  padding: 0 20px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
`;

const SelectorContainer = styled.div`
  position: relative;
`;

interface CustomEventRowProps {
  selectorDefault?: string;
  eventNameDefault?: string;
  eventDataDefault?: string | Record<string, any>;
}

const fireEvent = (eventName: string, eventData: string, selector = '') => {
  const data = eventData || null;

  try {
    const parsedData = data ? JSON.parse(data) : {};

    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;

    const storyBookIframeDocument = iframe?.contentWindow?.document;

    if (!storyBookIframeDocument) {
      console.warn('Could not find storybook preview iframe');
      return;
    }

    if (selector.length > 0) {
      const element = storyBookIframeDocument.querySelector(selector);
      if (element) {
        element.dispatchEvent(new CustomEvent(eventName, { detail: parsedData }));
        console.log(`✅ Event "${eventName}" fired on "${selector}"`, parsedData);
      } else {
        console.warn(`⚠️ Selector "${selector}" not found`);
      }
    } else {
      storyBookIframeDocument.dispatchEvent(new CustomEvent(eventName, { detail: parsedData }));
      console.log(`✅ Event "${eventName}" fired globally`, parsedData);
    }
  } catch (error) {
    console.error('❌ Failed to fire event:', error);
  }
};

export const CustomEventRow = memo<CustomEventRowProps>(
  ({ selectorDefault = '', eventNameDefault = '', eventDataDefault = '{}' }) => {
    const [displaySelector, setDisplaySelector] = useState(selectorDefault.length > 0);
    const [selector, setSelector] = useState(selectorDefault);
    const [eventName, setEventName] = useState(eventNameDefault);
    const [eventData, setEventData] = useState(
      typeof eventDataDefault === 'string' ? eventDataDefault : JSON.stringify(eventDataDefault, null, 2),
    );

    return (
      <RowContainer>
        <StyledInput
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="event-name"
        />

        <StyledTextarea
          value={eventData}
          onChange={(e) => setEventData(e.target.value)}
          placeholder='{"key": "value"}'
        />

        <SelectorContainer>
          {!displaySelector && selector.length === 0 ? (
            <AddSelectorButton onClick={() => setDisplaySelector(true)}>
              <AddIcon />
              Add selector
            </AddSelectorButton>
          ) : (
            <StyledInput
              type="text"
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              placeholder="tp-button"
            />
          )}
        </SelectorContainer>

        <SendButton onClick={() => fireEvent(eventName, eventData, selector)}>Send</SendButton>
      </RowContainer>
    );
  },
);

CustomEventRow.displayName = 'CustomEventRow';
