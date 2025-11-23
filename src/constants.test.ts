import { describe, it, expect } from 'vitest';
import { ADDON_ID, PANEL_ID, KEY } from './constants';

describe('constants', () => {
  it('should have correct ADDON_ID', () => {
    expect(ADDON_ID).toBe('storybook/custom-event-broadcaster');
  });

  it('should have correct PANEL_ID based on ADDON_ID', () => {
    expect(PANEL_ID).toBe('storybook/custom-event-broadcaster/panel');
    expect(PANEL_ID).toBe(`${ADDON_ID}/panel`);
  });

  it('should have correct KEY', () => {
    expect(KEY).toBe('storybook/custom-event-broadcaster');
  });

  it('should have KEY equal to ADDON_ID', () => {
    expect(KEY).toBe(ADDON_ID);
  });

  it('should export string constants', () => {
    expect(typeof ADDON_ID).toBe('string');
    expect(typeof PANEL_ID).toBe('string');
    expect(typeof KEY).toBe('string');
  });
});
