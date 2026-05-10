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

  // O(1)
  append(val: T): this {
    const node = new Node(val);

    // init insert
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
    ++this.size;

    return this;
  }

  // O(1)
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

  // O(n) | Best O(1)
  insertAt(val: T, idx: number) {
    if (idx > this.size) return this;
    else if (idx === 0) return this.prepend(val);
    else if (idx === this.size) return this.append(val);

    const node = new Node(val);
    let current = this.head;

    // start with 1 to make current after loop equals list[idx - 1]
    for (let i = 1; i < idx; i++) {
      current = current!.next;
    }

    node.next = current!.next;
    current!.next = node;

    ++this.size;
    return this;
  }

  // O(n) | Best O(1)
  contains(val: T): boolean {
    let current = this.head;

    while (current !== null) {
      if (current.val === val) return true;

      current = current.next;
    }

    return false;
  }

  // O(n) | Best O(1)
  getAt(idx: number): T | null {
    if (this.head === null || idx > this.size) return null;

    // O(1) for last element instead of O(n)
    if (idx === this.size) return this.tail!.val;

    let n = 0;
    let current: Node<T> | null = this.head;
    while (n < idx) {
      current = current!.next;
      n++;
    }

    return current!.val;
  }

  // O(n) | Best O(1)
  indexOf(val: T): number {
    let idx = 0;
    let current = this.head;
    while (current !== null) {
      if (current.val === val) return idx;

      idx++;
      current = current.next;
    }

    return -1;
  }

  // O(n) | Best O(1)
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

  // O(n)
  toArray(): T[] {
    const arr = [];

    let current = this.head;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }
}

export function append(val: any) {}
