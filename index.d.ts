import * as React from 'react';

export interface ReactAutosyncHeightProps {
  children: React.ReactNode;
  debug?: boolean;
  id: string;
}

declare class ReactAutosyncHeight extends React.Component<ReactAutosyncHeightProps> {}

declare module 'react-autosync-height' {}

export default ReactAutosyncHeight;
