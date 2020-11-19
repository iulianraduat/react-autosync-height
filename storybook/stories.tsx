import ReactAutosyncHeight from '../src/ReactAutosyncHeight';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(300px ,500px))',
};

const color = '#448844';

storiesOf('ReactAutosyncHeight', module)
  .addParameters({ options: { showPanel: false } })
  .add('Example from Readme', () => (
    <div style={style}>
      <div id="Column1">
        <ReactAutosyncHeight id="Section1">
          1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua.
        </ReactAutosyncHeight>
        <ReactAutosyncHeight id="Section2">
          2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua.
        </ReactAutosyncHeight>
        <ReactAutosyncHeight id="Section3">
          3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua.
        </ReactAutosyncHeight>
      </div>

      <div id="Column2">
        <ReactAutosyncHeight id="Section1">
          1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ReactAutosyncHeight>
        <ReactAutosyncHeight id="Section2">
          2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </ReactAutosyncHeight>
        <ReactAutosyncHeight id="Section3">
          3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua.
        </ReactAutosyncHeight>
      </div>
    </div>
  ));
