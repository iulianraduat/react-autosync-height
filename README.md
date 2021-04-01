# react-autosync-height ![Weekly downloads](https://img.shields.io/npm/dw/react-autosync-height 'Weekly downloads')

A react component which makes all its instances having the same id to have the maximum hight of their children.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/react-autosync-height/).

## Props

| Name     | Type      | Required | Default | Description                                                                               |
| -------- | --------- | -------- | ------- | ----------------------------------------------------------------------------------------- |
| id       | string    | yes      | -       | The id used to find the components for which to compute and apply the maximal height      |
| children | ReactNode | yes      | -       | The component who needs to have the height(\*) auto-synchronized with its pear components |

Note\*: The height will be applied to the wrapper and not directly to the children, as children can be an array of components.

---

## Versions

| ReactAutosyncHeight _uses_ |      React       |
| -------------------------: | :--------------: |
|                      1.0.x |      16.8.0      |
|                      1.1.x |      16.8.0      |
|                      1.2.x | 16.9.0 or 17.0.0 |
|                      1.3.x | 16.9.0 or 17.0.0 |

### About versioning schema used for ReactAutosyncHeight

- Major - it will be increased when the major version of the dependat package changes or there are breaking changes in the code of ReactAutosyncHeight
- Minor - it will be increased when no major version of the dependat package changes, but there are changes of the minor or patch versions of them
- Minor - it will be increased when it is added functionality in a backward compatible manner
- Patch - it will be increased when are made backward compatible bug fixes

---

## Example

Usage:

```js
import * as React from 'react';
import ReactAutosyncHeight from 'react-autosync-height';

class App extends React.Component {
  render() {
    style = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(300px ,500px))',
    };

    return (
      <div className="App" style={style}>
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
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- react-autosync-height is made publicly available

### 1.1.0

- Added support for auto-synchronization of the height when the children changes (as long as the changes are not made by the children themselves)

### 1.1.1

- Removed debug code
- Updated packages

### 1.2.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

### 1.3.0

- Changes in height of direct and indirect children will resize ReactAutosyncHeight component too
