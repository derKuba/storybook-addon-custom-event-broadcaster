import React from 'react';
import { render, screen } from './test/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { Panel } from './Panel';

// Mock the AddonPanel component
vi.mock('storybook/internal/components', () => ({
  AddonPanel: ({ children, ...props }: any) => (
    <div data-testid="addon-panel" {...props}>
      {children}
    </div>
  ),
}));

// Mock the CustomEventPanel component
vi.mock('./components/CustomEventPanel', () => ({
  CustomEventPanel: () => <div data-testid="custom-event-panel">Custom Event Panel</div>,
}));

describe('Panel', () => {
  it('should render AddonPanel with CustomEventPanel inside', () => {
    render(<Panel active={true} />);

    const addonPanel = screen.getByTestId('addon-panel');
    expect(addonPanel).toBeInTheDocument();

    const customEventPanel = screen.getByTestId('custom-event-panel');
    expect(customEventPanel).toBeInTheDocument();
  });

  it('should render correctly with different active prop values', () => {
    const { rerender } = render(<Panel active={true} />);

    let addonPanel = screen.getByTestId('addon-panel');
    expect(addonPanel).toBeInTheDocument();

    // Rerender with active=false should still work
    rerender(<Panel active={false} />);

    addonPanel = screen.getByTestId('addon-panel');
    expect(addonPanel).toBeInTheDocument();
  });

  it('should render with active=false', () => {
    render(<Panel active={false} />);

    const addonPanel = screen.getByTestId('addon-panel');
    expect(addonPanel).toBeInTheDocument();
    expect(addonPanel).not.toHaveAttribute('active');
  });
});
