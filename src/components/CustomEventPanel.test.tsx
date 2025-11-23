import React from 'react';
import { render, screen, fireEvent } from '../test/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CustomEventPanel } from './CustomEventPanel';

// Mock the storybook manager-api
vi.mock('storybook/manager-api', () => ({
  useParameter: vi.fn((key, defaultValue) => defaultValue),
}));

import { useParameter } from 'storybook/manager-api';

describe('CustomEventPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a single empty row when no parameters are provided', () => {
    (useParameter as any).mockReturnValue([]);

    render(<CustomEventPanel />);

    const eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(1);

    const addNewEventButton = screen.getByText('Add new event');
    expect(addNewEventButton).toBeInTheDocument();
  });

  it('should render header with correct labels', () => {
    (useParameter as any).mockReturnValue([]);

    render(<CustomEventPanel />);

    expect(screen.getByText('Event Name')).toBeInTheDocument();
    expect(screen.getByText('Data (JSON)')).toBeInTheDocument();
    expect(screen.getByText('Selector (optional)')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('should render rows for each config parameter', () => {
    const mockConfigs = [
      {
        eventName: 'event-1',
        eventData: { foo: 'bar' },
        selector: '.selector-1',
      },
      {
        eventName: 'event-2',
        eventData: { baz: 'qux' },
      },
      {
        eventName: 'event-3',
      },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    const eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(3);

    expect(eventNameInputs[0]).toHaveValue('event-1');
    expect(eventNameInputs[1]).toHaveValue('event-2');
    expect(eventNameInputs[2]).toHaveValue('event-3');
  });

  it('should render selector input for configs with selector', () => {
    const mockConfigs = [
      {
        eventName: 'event-1',
        selector: '.test-selector',
      },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    const selectorInput = screen.getByPlaceholderText('tp-button');
    expect(selectorInput).toBeInTheDocument();
    expect(selectorInput).toHaveValue('.test-selector');
  });

  it('should add a new row when "Add new event" button is clicked', () => {
    (useParameter as any).mockReturnValue([]);

    render(<CustomEventPanel />);

    const addNewEventButton = screen.getByText('Add new event');

    // Initially one row
    let eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(1);

    // Click to add a new row
    fireEvent.click(addNewEventButton);

    eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(2);

    // Click to add another row
    fireEvent.click(addNewEventButton);

    eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(3);
  });

  it('should add rows on top of existing config rows', () => {
    const mockConfigs = [
      {
        eventName: 'configured-event',
      },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    // Initially one config row
    let eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(1);
    expect(eventNameInputs[0]).toHaveValue('configured-event');

    // Add a new row
    const addNewEventButton = screen.getByText('Add new event');
    fireEvent.click(addNewEventButton);

    eventNameInputs = screen.getAllByPlaceholderText('event-name');
    expect(eventNameInputs).toHaveLength(2);
    expect(eventNameInputs[0]).toHaveValue('configured-event'); // Config row stays
    expect(eventNameInputs[1]).toHaveValue(''); // New empty row
  });

  it('should render event data as formatted JSON', () => {
    const mockConfigs = [
      {
        eventName: 'test-event',
        eventData: { nested: { key: 'value' }, array: [1, 2, 3] },
      },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    expect(eventDataTextarea).toHaveValue(
      JSON.stringify({ nested: { key: 'value' }, array: [1, 2, 3] }, null, 2)
    );
  });

  it('should handle string event data', () => {
    const mockConfigs = [
      {
        eventName: 'test-event',
        eventData: '{"stringified": true}',
      },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    expect(eventDataTextarea).toHaveValue('{"stringified": true}');
  });

  it('should render all send buttons', () => {
    const mockConfigs = [
      { eventName: 'event-1' },
      { eventName: 'event-2' },
      { eventName: 'event-3' },
    ];

    (useParameter as any).mockReturnValue(mockConfigs);

    render(<CustomEventPanel />);

    const sendButtons = screen.getAllByText('Send');
    expect(sendButtons).toHaveLength(3);
  });

  it('should display "Add new event" button with icon', () => {
    (useParameter as any).mockReturnValue([]);

    render(<CustomEventPanel />);

    const addButton = screen.getByText('Add new event');
    expect(addButton).toBeInTheDocument();

    // Check if the button has the icon (svg)
    const svg = addButton.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
