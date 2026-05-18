type NumStr = string | number;

// Time O(n^2) ~ O(n) | Space O(1)
export function selectionSort(arr: NumStr[]): NumStr[] {
  for (let o = 0; o < arr.length; ++o) {
    let minIdx = o;
    for (let i = o + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIdx]) minIdx = i;
    }
    [arr[o], arr[minIdx]] = [arr[minIdx], arr[o]];
  }

  return arr;
}
