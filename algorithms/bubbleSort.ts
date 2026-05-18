export function bubbleSort(arr: (string | number)[]): (string | number)[] {
  for (let o = arr.length - 1; o > 0; --o) {
    for (let i = 0; i < o; ++i) {
      // if current bigger than next => swap
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return arr;
}

console.log(bubbleSort([1, 43, 85, 3, 10, 54]));
console.log(bubbleSort(["medo", "khillo", "bodii", "abdo"]));
