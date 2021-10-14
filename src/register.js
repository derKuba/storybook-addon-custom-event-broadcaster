import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";

import DerKubaCustomEventPanel from "./components/custom-event-panel/custom-event-panel";

const ADDON_ID = "custom-event";
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Custom Events",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <DerKubaCustomEventPanel />
      </AddonPanel>
    ),
  });
});

// https://github.com/babel/minify
