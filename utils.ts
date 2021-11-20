export const getMostRepeatedCharacter = (
  inputString: string
): string | number => {
  // Your solution starts here.
  const map = {};
  const inputArr = inputString.split('');
  let mostFrequent = '';
  let max = 0;
  // inputArr.forEach((i) => {
  //   if (!map[i]) {
  //     map[i] = true;
  //     const list = inputArr.filter((j) => j === i);
  //     if (mostFrequent !== i && list.length >= max) {
  //       mostFrequent = i;
  //       max = list.length;
  //     }
  //   }
  // });

  inputArr.forEach((i) => {
    if (map[i]) {
      map[i] += 1;
    } else {
      map[i] = 1;
    }

    if (map[i] >= max) {
      max = map[i];
      mostFrequent = i;
    }
  });

  console.log(max, mostFrequent);

  return mostFrequent;
};
