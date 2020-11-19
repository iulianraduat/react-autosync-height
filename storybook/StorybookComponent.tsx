import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactAutosyncHeight from '../src/ReactAutosyncHeight';

const MAX_NUM_ROWS = 25;
const COUNT_APPENDS = 5;
const TEXT =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const StorybookComponent = (props: TProps) => {
  const { color, id, speed } = props;

  const initialNumRows = useMemo(() => Math.ceil(Math.random() * 5) + 1, []);
  const [numRows, setNumRows] = useState(initialNumRows);

  useEffect(() => {
    const timeout = setIntervalX(
      () => setNumRows((prevNumRows) => (prevNumRows < MAX_NUM_ROWS ? prevNumRows + 1 : prevNumRows)),
      speed * 1000,
      COUNT_APPENDS,
      id
    );
    return () => clearInterval(timeout);
  }, [speed]);

  const renderText = useCallback(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(TEXT);
    }
    return rows.join('\n');
  }, [numRows]);

  return (
    <ReactAutosyncHeight id={id}>
      <div style={{ backgroundColor: color }}>
        {id}. {renderText()}
      </div>
    </ReactAutosyncHeight>
  );
};

function setIntervalX(
  callback: (intervalId: NodeJS.Timeout) => void,
  delay: number,
  repetitions: number,
  meta?: string
) {
  let x = 0;
  const intervalId = setInterval(function () {
    callback(intervalId);

    if (++x >= repetitions) {
      clearInterval(intervalId);
    }
  }, delay);
  return intervalId;
}

interface TProps {
  color?: string;
  id: string;
  speed: number;
}
