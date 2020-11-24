import * as React from 'react';

interface TCache {
  [id: string]: HTMLDivElement[];
}

const cache: TCache = {};

const ReactAutosyncHeight = (props: TProps) => {
  const { children, id } = props;
  const elRef = React.useRef<HTMLDivElement>();

  const handleRef = React.useCallback(
    (el: HTMLDivElement) => {
      addToCache(id, el);
      findAndApplyHeight(id, el);
      elRef.current = el;
    },
    [id]
  );

  React.useLayoutEffect(() => {
    if (elRef.current) {
      /* otherwise the new height uses the one set by us */
      elRef.current.style.height = 'auto';
      findAndApplyHeight(id, elRef.current);
    }
  }, [children, elRef, id]);

  /* we want to remove it at unmount */
  React.useEffect(
    () => () => {
      if (elRef.current) {
        removeFromCache(id, elRef.current);
      }
    },
    [elRef, id]
  );

  return (
    <div data-cy="ReactAutosyncHeight" data-react-autosync-height={id} ref={handleRef}>
      {children}
    </div>
  );
};

function addToCache(id: string, el: HTMLDivElement | null) {
  if (!el) {
    return;
  }

  if (cache[id] === undefined) {
    cache[id] = [];
  }

  cache[id].push(el);
}

function getFromCache(id: string): HTMLDivElement[] {
  return cache[id];
}

function removeFromCache(id: string, el: HTMLDivElement) {
  cache[id] = cache[id].filter((e) => e !== el);
}

function findAndApplyHeight(id: string, el: HTMLDivElement | null) {
  if (!el) {
    return;
  }

  if (el.offsetHeight === 0) {
    setTimeout(() => findAndApplyHeight(id, el), 100);
    return;
  }

  const elements = getFromCache(id);

  let maxHeight = 0;
  elements.forEach((el) => {
    maxHeight = getMaximumHeight(maxHeight, el);
  });

  elements.forEach((el) => {
    // if (getElementHeight(el) >= maxHeight) {
    //   return;
    // }

    (el as any).style.height = `${maxHeight}px`;
  });

  return maxHeight;
}

function getElementHeight(el: HTMLDivElement): number {
  return Math.ceil(el.getBoundingClientRect().height);
}

function getMaximumHeight(prevMaxHeight: number, el: HTMLDivElement): number {
  return Math.max(prevMaxHeight, getElementHeight(el));
}

interface TProps {
  children: React.ReactNode;
  id: string;
}

export default ReactAutosyncHeight;
