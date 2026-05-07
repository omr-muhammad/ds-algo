import { Node } from "./_Node";

export class SingleLL<T> {
  private head: null | Node<T>;
  private tail: null | Node<T>;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val: T) {
    const node = new Node(val);

    // init insert
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    // second insert
    else if (this.head === this.tail) {
      this.tail = node;
      this.head.next = this.tail;
    }
    // normal insert
    else {
      this.tail!.next = node;
      this.tail = node;
    }

    return ++this.size;
  }

  prepend(val: T) {
    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return ++this.size;
  }
}

export function append(val: any) {}
