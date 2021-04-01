import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactAutosyncHeight from '../src/ReactAutosyncHeight';
import { DynamicComponent } from './DynamicComponent';

export const StaticComponent = (props: TProps) => {
  const { color, id, speed } = props;

  return (
    <ReactAutosyncHeight id={id}>
      <DynamicComponent id={id} color={color} speed={speed} />
    </ReactAutosyncHeight>
  );
};

interface TProps {
  color?: string;
  id: string;
  speed: number;
}
