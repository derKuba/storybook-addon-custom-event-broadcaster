import React from 'react';
import { AddonPanel } from 'storybook/internal/components';
import { CustomEventPanel } from './components/CustomEventPanel';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <CustomEventPanel />
    </AddonPanel>
  );
};
