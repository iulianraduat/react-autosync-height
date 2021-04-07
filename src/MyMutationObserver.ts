import * as ReactDOM from 'react-dom';

export const ALL_CATEGORIES = 'ALL_CATEGORIES';
export const ATTRIBUTES = 'attributes';
export const CHARACTER_DATA = 'characterData';
export const CHILD_LIST = 'childList';
export const CHILD_ADDED = 'childAdded';
export const CHILD_REMOVED = 'childRemoved';

type MutationObserverCategory = 'ALL_CATEGORIES' | 'childList' | 'attributes' | 'characterData';
type MutationObserverCategories = ('childList' | 'attributes' | 'characterData')[];

export class MyMutationObserver {
  private observer: MutationObserver;
  private el: HTMLDivElement;
  private onMutation: (type: string, payload: MutationPayload) => void;

  constructor(
    el: HTMLDivElement,
    onMutation: (type: string, payload: MutationPayload) => void,
    config?: MutationObserverInit
  ) {
    const node = ReactDOM.findDOMNode(el);
    if (node === null) {
      return;
    }

    this.el = el;
    this.onMutation = onMutation;
    this.observer = new MutationObserver((mutations) => mutations.forEach(this.mutationReducer.bind(this)));
    this.observer.observe(node, config);
  }

  public disconnect() {}

  /* config */

  public static buildConfig(props: {
    attributeList?: string[];
    categories: MutationObserverCategory | MutationObserverCategories;
    subtree?: boolean;
    suppressAttributeOldValue?: boolean;
    suppressCharacterDataOldValue?: boolean;
  }) {
    const { attributeList = [], categories, suppressAttributeOldValue, suppressCharacterDataOldValue, subtree } = props;
    const cats = MyMutationObserver.getCategories(categories);

    const config: MutationObserverInit = {
      /* Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is specified. */
      attributes: cats.indexOf(ATTRIBUTES) > -1,
      /* Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified. */
      characterData: cats.indexOf(CHARACTER_DATA) > -1,
      /* Set to true if mutations to target's children are to be observed. */
      childList: cats.indexOf(CHILD_LIST) > -1,
      /* Set to a list of attribute local names (without namespace) if not all attribute mutations need to be observed and attributes is true or omitted. */
      attributeFilter: attributeList.length > 0 && cats.indexOf(ATTRIBUTES) > -1 ? attributeList : undefined,
      /* Set to true if attributes is true or omitted and target's attribute value before the mutation needs to be recorded. */
      attributeOldValue: suppressAttributeOldValue === false && cats.indexOf(ATTRIBUTES) > -1,
      /* Set to true if characterData is set to true or omitted and target's data before the mutation needs to be recorded. */
      characterDataOldValue: suppressCharacterDataOldValue === false && cats.indexOf(CHARACTER_DATA) > -1,
      /* Set to true if mutations to not just target, but also target's descendants are to be observed. */
      subtree,
    };
    return config;
  }

  private static getCategories(
    categories: MutationObserverCategory | MutationObserverCategories
  ): MutationObserverCategories {
    if (categories === ALL_CATEGORIES) {
      return [ATTRIBUTES, CHARACTER_DATA, CHILD_LIST];
    }

    if (typeof categories === 'string') {
      return [categories];
    }

    return categories;
  }

  /* mutation handlers */
  private mutationReducer(payload: MutationRecord) {
    const { type } = payload;
    switch (type) {
      case ATTRIBUTES:
        return this.handleAttributes(payload);
      case CHARACTER_DATA:
        return this.handleCharacterData(payload);
      case CHILD_LIST:
        return this.handleChildList(payload);
    }
  }

  private handleAttributes(payload: MutationRecord) {
    const { oldValue, target, attributeName, attributeNamespace } = payload;
    const res: MutationPayload = {
      from: oldValue ?? undefined,
      to: attributeName ? (target as Element).getAttribute(attributeName) ?? undefined : undefined,
      name: attributeName ?? undefined,
      namespace: attributeNamespace ?? undefined,
      target,
    };
    this.onMutation(ATTRIBUTES, res);
  }

  private handleCharacterData(payload: MutationRecord) {
    const { oldValue, target } = payload;
    const res: MutationPayload = {
      from: oldValue ?? undefined,
      to: (target as CharacterData).data,
      target,
    };
    this.onMutation(CHARACTER_DATA, res);
  }

  private handleChildList(payload: MutationRecord) {
    const { addedNodes, nextSibling, previousSibling, removedNodes, target } = payload;
    const res: MutationPayload = {
      target,
      previousSibling: previousSibling ?? undefined,
      nextSibling: nextSibling ?? undefined,
      wrappedNode: this.el,
    };

    if (addedNodes.length > 0) {
      Array.from(addedNodes).forEach((child) => {
        this.onMutation(CHILD_ADDED, { ...res, child });
      });
    }

    if (removedNodes.length > 0) {
      Array.from(removedNodes).forEach((child) => {
        this.onMutation(CHILD_REMOVED, { ...res, child });
      });
    }
  }
}

export interface MutationPayload {
  child?: Node;
  from?: string;
  name?: string;
  namespace?: string;
  nextSibling?: Node;
  previousSibling?: Node;
  target: Node;
  to?: string;
  wrappedNode?: HTMLDivElement;
}
