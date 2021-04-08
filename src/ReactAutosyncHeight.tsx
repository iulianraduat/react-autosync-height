import * as React from 'react';
import { ALL_CATEGORIES, ATTRIBUTES, MutationPayload, MyMutationObserver } from './MyMutationObserver';

interface TCache {
  [id: string]: HTMLDivElement[];
}

const cache: TCache = {};

const ReactAutosyncHeight = (props: TProps) => {
  const { children, debug = false, id } = props;
  const elRef = React.useRef<HTMLDivElement>();
  const observerRef = React.useRef<MyMutationObserver>();

  const handleResize = React.useCallback(
    (el: HTMLDivElement) => {
      if (el.style.height === 'auto') {
        /* we are already in the process of computing the new height */
        return;
      }

      const elements = getFromCache(id);
      elements.forEach((el) => {
        /* we change the attributes only if it is necessary */
        if (el.style.height === 'auto') {
          return;
        }

        el.dataset.prevHeight = el.style.height;
        /* otherwise the new height uses the one set by us */
        el.setAttribute('style', `height:auto`);
      });
      requestAnimationFrame(() => findAndApplyHeight(id, el, debug));
    },
    [debug, id]
  );

  const handleMutation = React.useCallback(
    (type: string, payload: MutationPayload) => {
      const el = elRef.current;

      /* we ignore changes produced by altering the hight */
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
      findAndApplyHeight(id, el, debug);
      elRef.current = el;

      handleResize(el);

      observerRef.current = new MyMutationObserver(
        el,
        handleMutation,
        MyMutationObserver.buildConfig({ categories: ALL_CATEGORIES, subtree: true })
      );
    },
    [handleMutation, handleResize, debug, id]
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

function findAndApplyHeight(id: string, el: HTMLDivElement | null, debug: boolean) {
  if (!el) {
    return;
  }

  if (el.offsetHeight === 0) {
    setTimeout(() => findAndApplyHeight(id, el, debug), 100);
    return;
  }

  const elements = getFromCache(id);

  let maxHeight = 0;
  elements.forEach((el) => {
    maxHeight = getMaximumHeight(maxHeight, el);
  });

  let count = 0;
  elements.forEach((el) => {
    const prevHeight = el.dataset.prevHeight;
    delete el.dataset.prevHeight;
    if (el.style.height === prevHeight) {
      return;
    }

    const newHeight = `${maxHeight}px`;
    if (el.style.height === newHeight) {
      return;
    }

    el.setAttribute('style', `height:${newHeight}`);
    count++;
  });

  if (debug && count > 0) {
    const msg = `[ReactAutosyncHeight] ${id} : ${maxHeight}px (applied to ${count} element${count === 1 ? '' : 's'})`;
    console.info(msg);
  }

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
  debug?: boolean;
  id: string;
}

export default ReactAutosyncHeight;
