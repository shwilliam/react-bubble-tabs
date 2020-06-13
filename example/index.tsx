import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BubbleTabs } from '../.';

const App = () => {
  return (
    <div>
      <BubbleTabs>hello world</BubbleTabs>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
