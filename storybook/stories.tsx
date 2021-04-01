import ReactAutosyncHeight from '../src/ReactAutosyncHeight';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookComponent } from './StorybookComponent';
import { StaticComponent } from './StaticComponent';

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
  ))
  .add('Dynamic change of the content (re-render)', () => (
    <div style={style}>
      <div id="Column1">
        <StorybookComponent id="Section1" speed={2} color="aqua" />
        <StorybookComponent id="Section2" speed={0.5} color="antiquewhite" />
        <StorybookComponent id="Section3" speed={1} color="aliceblue" />
      </div>

      <div id="Column2">
        <StorybookComponent id="Section1" speed={1} color="aqua" />
        <StorybookComponent id="Section2" speed={1} color="antiquewhite" />
        <StorybookComponent id="Section3" speed={0.4} color="aliceblue" />
      </div>
    </div>
  ))
  .add('Dynamic change of the content (child re-render)', () => (
    <div style={style}>
      <div id="Column1">
        <StaticComponent id="Section1" speed={2} color="aqua" />
        <StaticComponent id="Section2" speed={0.5} color="antiquewhite" />
        <StaticComponent id="Section3" speed={1} color="aliceblue" />
      </div>

      <div id="Column2">
        <StaticComponent id="Section1" speed={1} color="aqua" />
        <StaticComponent id="Section2" speed={1} color="antiquewhite" />
        <StaticComponent id="Section3" speed={0.4} color="aliceblue" />
      </div>
    </div>
  ));
