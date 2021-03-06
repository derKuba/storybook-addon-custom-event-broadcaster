import React, { useState } from 'react';
import { useParameter } from '@storybook/api';

import { TableWrapper, ResetWrapper, Icons } from '@storybook/components';

import CustomEventRow from '../custom-event-row/custom-event-row';
import { FlexedBox, IconBox } from '../../styled-components/boxes';

const renderTableRows = (_parameterData) => {
  if (_parameterData !== null && _parameterData.length > 0) {
    const rows = _parameterData.map((row, index) => {
      const attributes = {
        selectorDefault: row.selector,
        eventNameDefault: row.eventName,
        eventDataDefault: JSON.stringify(row.eventData) || '',
      };

      return (
        <CustomEventRow
          key={`key__${row.eventName}__${index}`} // eslint-disable-line react/no-array-index-key
          {...attributes}
        />
      );
    });
    return rows;
  }

  return <CustomEventRow key="single" />;
};

function CustomEventPanel() {
  const customEventPanelParameterData = useParameter('customEventPanel', null);

  const [additionalRows, setAdditionalRows] = useState(0);

  const addNewRow = () => {
    const count = additionalRows + 1;
    setAdditionalRows(count);
  };

  return (
    <ResetWrapper>
      <TableWrapper inAddonPanel>
        <thead>
          <tr>
            <th>EventName</th>
            <th>Data</th>
            <th>(opt.) Selector</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows(customEventPanelParameterData)}
          {[...Array(additionalRows).keys()].map((_, index) => (
            <CustomEventRow
              key={
                `addRow_${index + 1}` // eslint-disable-line react/no-array-index-key
              }
            />
          ))}
          <tr>
            <td>
              <FlexedBox onClick={addNewRow}>
                <IconBox key="iconBox">
                  <Icons icon="add" />
                </IconBox>
              </FlexedBox>
            </td>
          </tr>
        </tbody>
      </TableWrapper>
    </ResetWrapper>
  );
}

export default CustomEventPanel;
