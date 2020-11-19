import * as React from 'react';

export interface ReactAutosyncHeightProps {
  id: string;
  children: React.ReactNode;
}

declare class ReactAutosyncHeight extends React.Component<ReactAutosyncHeightProps> {}

declare module 'react-autosync-height' {}

export default ReactAutosyncHeight;
