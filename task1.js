// Couldn't complete this task
const inputString = "417427194451417";
const dictionary = ["94451"];

const getCombinations = (inputString, dictionary) => {
  let list = [];
  if (dictionary.length > 0) {
    dictionary.forEach((item) => {
      const splittedItem = inputString.split(item);
      console.log(splittedItem, "splittt");
      const joinedItems = splittedItem.join(":");
      list.push(joinedItems);
    });
  }

  return list;
};

const result = getCombinations(inputString, dictionary);

console.log(result);
