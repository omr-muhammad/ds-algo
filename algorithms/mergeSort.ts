type NumStr = string | number;

function merge(arr1: NumStr[], arr2: NumStr[]) {
  let p1 = 0;
  let p2 = 0;

  const sorted: NumStr[] = [];
  while (p1 < arr1.length || p2 < arr2.length) {
    if (p1 === arr1.length) {
      while (p2 < arr2.length) {
        sorted.push(arr2[p2]);
        ++p2;
      }
      return sorted;
    } else if (p2 === arr2.length) {
      while (p1 < arr1.length) {
        sorted.push(arr1[p1]);
        ++p1;
      }
      return sorted;
    }

    const lowest = arr1[p1] <= arr2[p2] ? arr1[p1] : arr2[p2];

    sorted.push(lowest);
    lowest === arr1[p1] ? ++p1 : ++p2;
  }

  return sorted;
}

export function mergeSort(arr: NumStr[]) {
  if (arr.length <= 1) return arr;

  const left: NumStr[] = mergeSort(arr.slice(0, arr.length / 2));
  const right: NumStr[] = mergeSort(arr.slice(arr.length / 2));

  return merge(left, right);
}

console.log(mergeSort([90, 89, 79, 69, 59]));
