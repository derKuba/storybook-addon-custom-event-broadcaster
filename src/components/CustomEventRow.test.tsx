import React from 'react';
import { render, screen, fireEvent } from '../test/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CustomEventRow } from './CustomEventRow';

describe('CustomEventRow', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Mock console methods
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should render with default empty values', () => {
    render(<CustomEventRow />);

    const eventNameInput = screen.getByPlaceholderText('event-name');
    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    const addSelectorButton = screen.getByText('Add selector');
    const sendButton = screen.getByText('Send');

    expect(eventNameInput).toBeInTheDocument();
    expect(eventNameInput).toHaveValue('');
    expect(eventDataTextarea).toBeInTheDocument();
    expect(eventDataTextarea).toHaveValue('{}');
    expect(addSelectorButton).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it('should render with provided default values', () => {
    render(
      <CustomEventRow
        eventNameDefault="test-event"
        eventDataDefault={{ foo: 'bar' }}
        selectorDefault=".test-selector"
      />
    );

    const eventNameInput = screen.getByPlaceholderText('event-name');
    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    const selectorInput = screen.getByPlaceholderText('tp-button');

    expect(eventNameInput).toHaveValue('test-event');
    expect(eventDataTextarea).toHaveValue('{\n  "foo": "bar"\n}');
    expect(selectorInput).toHaveValue('.test-selector');
  });

  it('should update event name on input change', () => {
    render(<CustomEventRow />);

    const eventNameInput = screen.getByPlaceholderText('event-name');
    fireEvent.change(eventNameInput, { target: { value: 'my-custom-event' } });

    expect(eventNameInput).toHaveValue('my-custom-event');
  });

  it('should update event data on textarea change', () => {
    render(<CustomEventRow />);

    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    fireEvent.change(eventDataTextarea, { target: { value: '{"test": 123}' } });

    expect(eventDataTextarea).toHaveValue('{"test": 123}');
  });

  it('should show selector input when "Add selector" button is clicked', () => {
    render(<CustomEventRow />);

    const addSelectorButton = screen.getByText('Add selector');
    fireEvent.click(addSelectorButton);

    const selectorInput = screen.getByPlaceholderText('tp-button');
    expect(selectorInput).toBeInTheDocument();
    expect(screen.queryByText('Add selector')).not.toBeInTheDocument();
  });

  it('should update selector value on input change', () => {
    render(<CustomEventRow selectorDefault=".test" />);

    const selectorInput = screen.getByPlaceholderText('tp-button');
    fireEvent.change(selectorInput, { target: { value: '#my-element' } });

    expect(selectorInput).toHaveValue('#my-element');
  });

  it('should call fireEvent when Send button is clicked', () => {
    // Mock the iframe
    const mockIframe = document.createElement('iframe');
    mockIframe.id = 'storybook-preview-iframe';
    const mockDocument = {
      dispatchEvent: vi.fn(),
      querySelector: vi.fn(),
    };
    Object.defineProperty(mockIframe, 'contentWindow', {
      value: { document: mockDocument },
      writable: true,
    });
    document.body.appendChild(mockIframe);

    render(
      <CustomEventRow
        eventNameDefault="test-event"
        eventDataDefault={{ key: 'value' }}
      />
    );

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    expect(mockDocument.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'test-event',
      })
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Event "test-event" fired globally'),
      { key: 'value' }
    );

    document.body.removeChild(mockIframe);
  });

  it('should fire event on specific element when selector is provided', () => {
    // Mock the iframe and element
    const mockIframe = document.createElement('iframe');
    mockIframe.id = 'storybook-preview-iframe';
    const mockElement = {
      dispatchEvent: vi.fn(),
    };
    const mockDocument = {
      querySelector: vi.fn(() => mockElement),
    };
    Object.defineProperty(mockIframe, 'contentWindow', {
      value: { document: mockDocument },
      writable: true,
    });
    document.body.appendChild(mockIframe);

    render(
      <CustomEventRow
        eventNameDefault="test-event"
        eventDataDefault={{ key: 'value' }}
        selectorDefault=".my-selector"
      />
    );

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    expect(mockDocument.querySelector).toHaveBeenCalledWith('.my-selector');
    expect(mockElement.dispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'test-event',
      })
    );
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Event "test-event" fired on ".my-selector"'),
      { key: 'value' }
    );

    document.body.removeChild(mockIframe);
  });

  it('should warn when selector is not found', () => {
    // Mock the iframe with no matching element
    const mockIframe = document.createElement('iframe');
    mockIframe.id = 'storybook-preview-iframe';
    const mockDocument = {
      querySelector: vi.fn(() => null),
    };
    Object.defineProperty(mockIframe, 'contentWindow', {
      value: { document: mockDocument },
      writable: true,
    });
    document.body.appendChild(mockIframe);

    render(
      <CustomEventRow
        eventNameDefault="test-event"
        selectorDefault=".non-existent"
      />
    );

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('Selector ".non-existent" not found')
    );

    document.body.removeChild(mockIframe);
  });

  it('should handle invalid JSON in event data', () => {
    const mockIframe = document.createElement('iframe');
    mockIframe.id = 'storybook-preview-iframe';
    const mockDocument = {
      dispatchEvent: vi.fn(),
    };
    Object.defineProperty(mockIframe, 'contentWindow', {
      value: { document: mockDocument },
      writable: true,
    });
    document.body.appendChild(mockIframe);

    render(<CustomEventRow eventNameDefault="test-event" />);

    const eventDataTextarea = screen.getByPlaceholderText('{"key": "value"}');
    fireEvent.change(eventDataTextarea, { target: { value: 'invalid json' } });

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Failed to fire event'),
      expect.any(Error)
    );

    document.body.removeChild(mockIframe);
  });

  it('should warn when iframe is not found', () => {
    render(<CustomEventRow eventNameDefault="test-event" />);

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    expect(console.warn).toHaveBeenCalledWith(
      'Could not find storybook preview iframe'
    );
  });
});
