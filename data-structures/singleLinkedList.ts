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

    // first append
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    // second append
    else if (this.head.next === null) {
      this.tail = node;
      this.head.next = this.tail;
      return ++this.size;
    }
    // normal append
    else {
      this.tail!.next = node;
      this.tail = node;
    }

    return ++this.size;
  }
}

export function append(val: any) {}
