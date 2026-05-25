type NumStr = number | string;

export function insertionSort(arr: NumStr[]): NumStr[] {
  for (let o = 1; o < arr.length; ++o) {
    for (let i = o - 1; i >= 0; --i) {
      if (arr[i] <= arr[i + 1]) break;

      // swap if still greater
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return arr;
}

console.log(insertionSort([9, 8, 7, 6]));
