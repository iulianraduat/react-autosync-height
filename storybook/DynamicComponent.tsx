import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactAutosyncHeight from '../src/ReactAutosyncHeight';

const MAX_NUM_ROWS = 25;
const COUNT_APPENDS = 5;
const COUNT_SUBSTRACTIONS = 5;
const TEXT =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const DynamicComponent = (props: TProps) => {
  const { color, id, speed } = props;

  const initialNumRows = useMemo(() => Math.ceil(Math.random() * 5) + 1, []);
  const [numRows, setNumRows] = useState(initialNumRows);
  const count = useRef(0);

  useEffect(() => {
    const timeout = setIntervalX(
      () =>
        setNumRows((prevNumRows) => {
          if (prevNumRows < 2) {
            return prevNumRows + 1;
          }
          if (prevNumRows >= MAX_NUM_ROWS) {
            return prevNumRows - 1;
          }

          count.current++;
          return count.current <= COUNT_APPENDS
            ? prevNumRows + 1
            : prevNumRows - 1;
        }),
      speed * 1000,
      COUNT_APPENDS + COUNT_SUBSTRACTIONS,
      id
    );
    return () => clearInterval(timeout);
  }, [count, speed]);

  const renderText = useCallback(() => {
    const rows: Array<string> = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(TEXT);
    }
    return rows.join('\n');
  }, [numRows]);

  return (
    <div style={{ backgroundColor: color }}>
      {id}. {renderText()}
    </div>
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
