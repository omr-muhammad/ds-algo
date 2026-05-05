export class Node<T> {
  val: T;
  next: null | Node<T>;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
