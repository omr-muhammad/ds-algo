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

  append(val: T): this {
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

    ++this.size;
    return this;
  }

  prepend(val: T): this {
    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    ++this.size;
    return this;
  }

  contains(val: T): boolean {
    let current = this.head;

    while (current !== null) {
      if (current.val === val) return true;

      current = current.next;
    }

    return false;
  }

  delete(val: T): boolean {
    if (this.head === null) return false;

    if (this.head.val === val) {
      const node = this.head;
      this.head = this.head.next;
      node.next = null;
      --this.size;
      return true;
    }

    let prev = this.head;
    let current = this.head.next;
    while (current !== null) {
      if (current.val === val) {
        // Updating tail incase deleting last node
        if (current === this.tail) this.tail = prev;

        prev.next = current.next;

        // disconnect the deleted node from the list
        current.next = null;

        --this.size;
        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
  }
}

export function append(val: any) {}
