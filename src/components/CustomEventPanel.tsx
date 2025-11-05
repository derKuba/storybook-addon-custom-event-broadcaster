// src/components/CustomEventPanel.tsx
import React, { useState } from 'react';
import { useParameter } from 'storybook/manager-api';
import { AddIcon } from '@storybook/icons';

import { CustomEventRow } from './CustomEventRow';

import { styled } from 'storybook/theming';

const Container = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.background.content};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 100px;
  gap: 12px;
  padding: 12px 16px;
  background: ${(props) => props.theme.color.darker};
  border-radius: 4px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 13px;
  color: ${(props) => props.theme.color.lightest};
  border: 1px solid ${(props) => props.theme.color.border};
`;

const AddRowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  margin-top: 16px;
  background: ${(props) => props.theme.background.content};
  border: 2px dashed ${(props) => props.theme.color.mediumdark};
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.color.defaultText};
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.color.secondary};
    background: ${(props) => props.theme.background.hoverable};
    color: ${(props) => props.theme.color.secondary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface CustomEventConfig {
  selector?: string;
  eventName: string;
  eventData?: any;
}

export const CustomEventPanel: React.FC = () => {
  const customEventPanelParameterData = useParameter<CustomEventConfig[]>('customEventPanel', []);

  const [additionalRows, setAdditionalRows] = useState(0);

  const addNewRow = () => {
    setAdditionalRows((prev) => prev + 1);
  };

  return (
    <Container>
      <Header>
        <div>Event Name</div>
        <div>Data (JSON)</div>
        <div>Selector (optional)</div>
        <div>Action</div>
      </Header>

      <EventsContainer>
        {customEventPanelParameterData.length > 0 ? (
          customEventPanelParameterData.map((config, index) => (
            <CustomEventRow
              key={`config-${index}`}
              selectorDefault={config.selector}
              eventNameDefault={config.eventName}
              eventDataDefault={config.eventData}
            />
          ))
        ) : (
          <CustomEventRow />
        )}

        {[...Array(additionalRows)].map((_, index) => (
          <CustomEventRow key={`additional-${index}`} />
        ))}
      </EventsContainer>

      <AddRowButton onClick={addNewRow}>
        <AddIcon />
        Add new event
      </AddRowButton>
    </Container>
  );
};
