// Time O(n^2) ~ O(n) | Space O(1)
type Element = string | number;

export function bubbleSort(arr: Element[]): Element[] {
  for (let o = arr.length - 1; o > 0; --o) {
    let swap = false;

    for (let i = 0; i < o; ++i) {
      // if current bigger than next => swap
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }

    // if we didn't swap we're done 🥳🥳
    if (!swap) return arr;
  }

  return arr;
}
