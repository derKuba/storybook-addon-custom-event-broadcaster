import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";

import DerKubaCustomEventPanel from "./components/derkuba-custom-event-panel";

const ADDON_ID = "myaddon";
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "My Addon2222",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <DerKubaCustomEventPanel />
      </AddonPanel>
    ),
  });
});

// https://github.com/babel/minify
