import React from "react";

import { AddonPanel } from "@storybook/components";

import DerKubaCustomEventPanel from "./components/custom-event-panel/custom-event-panel";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <DerKubaCustomEventPanel />
    </AddonPanel>
  );
};
