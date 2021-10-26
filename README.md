# storybook-addon-custom-event-broadcaster

Custom panel tab to send custom events to components.

This addon adds a tab to the addon panel. It has a set of input fields. The input of these fields are used to create a [custom event](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events).

| Input         |                    functionality                    |
| ------------- | :-------------------------------------------------: |
| EventName     |                  Name of the event                  |
| Data          |        custom data, to be send in the event         |
| Selector      | the selector of the node the event will be fired on |
| "send"-Button |               Push to send the event                |

#### Install

```bash
npm install storybook-addon-custom-event-broadcaster
```

Add addon to the storybook configuration:

```bash
// .storybook/main.js
module.exports = {
 ...
  addons: [
   ...
    'storybook-addon-custom-event-broadcaster/dist/presets.js',0
  ],
};
```

#### Configuration in your story

// \*.stories.jsx

```js
export default {
  title: "Content/Wizards",
  parameters: {
    customEventPanel: [
      {
        eventName: "wizard:next",
        eventData: {
          opt: 23,
        },
        selector: "mein.selektor",
      },
      {
        eventName: "wizard:previous",
        eventData: {
          bla: 23,
        },
      },
    ],
  },
  argTypes: {},
};
```

#### Plugin in Action
