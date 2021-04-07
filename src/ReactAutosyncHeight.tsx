import * as React from 'react';
import { ALL_CATEGORIES, ATTRIBUTES, MutationPayload, MyMutationObserver } from './MyMutationObserver';

interface TCache {
  [id: string]: HTMLDivElement[];
}

const cache: TCache = {};

const ReactAutosyncHeight = (props: TProps) => {
  const { children, id } = props;
  const elRef = React.useRef<HTMLDivElement>();
  const observerRef = React.useRef<MyMutationObserver>();

  const handleResize = React.useCallback(
    (el: HTMLDivElement) => {
      /* otherwise the new height uses the one set by us */
      const elements = getFromCache(id);
      elements.forEach((rashEl) => rashEl.setAttribute('style', `height:auto`));
      requestAnimationFrame(() => findAndApplyHeight(id, el));
    },
    [id]
  );

  const handleMutation = React.useCallback(
    (type: string, payload: MutationPayload) => {
      const el = elRef.current;

      if (type === ATTRIBUTES && payload.target === el) {
        return;
      }

      if (el !== undefined) {
        handleResize(el);
      }
    },
    [handleResize]
  );

  const handleRef = React.useCallback(
    (el: HTMLDivElement | null) => {
      if (el === null) {
        return;
      }

      addToCache(id, el);
      findAndApplyHeight(id, el);
      elRef.current = el;

      handleResize(el);

      observerRef.current = new MyMutationObserver(
        el,
        handleMutation,
        MyMutationObserver.buildConfig({ categories: ALL_CATEGORIES, subtree: true })
      );
    },
    [handleMutation, handleResize, id]
  );

  /* we want to remove it and to free the observer at unmount */
  React.useEffect(
    () => () => {
      observerRef.current?.disconnect();

      if (elRef.current) {
        removeFromCache(id, elRef.current);
      }
    },
    [id]
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
    el.setAttribute('style', `height:${maxHeight}px`);
  });

  return maxHeight;
}

function getMaximumHeight(maxHeight: number, el: HTMLDivElement): number {
  const elHeight = getElementHeight(el);
  return Math.max(maxHeight, elHeight);
}

function getElementHeight(el: HTMLDivElement): number {
  const box = el.getBoundingClientRect();
  return Math.ceil(box.height);
}

interface TProps {
  children: React.ReactNode;
  id: string;
}

export default ReactAutosyncHeight;
