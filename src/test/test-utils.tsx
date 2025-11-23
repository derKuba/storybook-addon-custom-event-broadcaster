import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, themes, ensure } from 'storybook/theming';

// Create a wrapper with ThemeProvider
function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={ensure(themes.light)}>{children}</ThemeProvider>;
}

// Custom render function that includes providers
function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
