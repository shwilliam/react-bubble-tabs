import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as BubbleTabs } from '../stories/BubbleTabs.stories';

describe('BubbleTabs', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BubbleTabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
