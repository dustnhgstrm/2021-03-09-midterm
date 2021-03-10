// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function ageToAbilities(age) {
  if (age < 16) {
    return "You can't drive.";
  } else if (age == "16" || age == "17") {
    return "You can drive but not vote.";
  } else if (age >= "18" && age <= "24") {
    return "You can vote but not rent a car.";
  } else return "You can do pretty much anything.";
}

function oddIndices(arr) {
  let ourArray = [];
  for (i = 1; i < arr.length; i = i + 2) {
    ourArray.push(arr[i]);
  }
  return ourArray;
}

function numOddValues(arr) {
  let oddCount = 0;
  for (const value of arr) {
    if (value % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount;
}

function averageStringLength(arr) {
  let sumLength = 0;
  let numIndices = 0;
  let bigString = arr.join("");
  if (bigString.length < 1) {
    return 0;
  }
  for (const str of arr) {
    numIndices++;
  }
  for (const char of bigString) {
    sumLength++;
  }
  return sumLength / numIndices;
}

function firstPunctuationIndex(str) {
  let everythingElseCount = 0;
  let someKindOfMarkCount = 0;
  for (const char of str) {
    if (char !== "!" && char !== "?" && char !== ".") {
      everythingElseCount++;
    }
    if (char === "?" || char === "!" || char === ".") {
      someKindOfMarkCount++;
      break;
    }
  }
  if (someKindOfMarkCount === 0) {
    return -1;
  } else return everythingElseCount;
}

function getPlace(arr, score) {
  let myScoreIndex = 1;
  let lastIndexPlusOne = arr.length + 1;
  let lastStringIHope = lastIndexPlusOne.toString();
  for (let i = 0; i < arr.length; i++) {
    let placeToString = myScoreIndex.toString();
    if (score > arr[i]) {
      placeToString = placeToString;
    }
    if (score < arr[i]) {
      myScoreIndex++;
      continue;
    }
    if (placeToString.endsWith("1") || placeToString.endsWith("01")) {
      return placeToString + "st place";
    }
    if (placeToString.endsWith("2") || placeToString.endsWith("02")) {
      return placeToString + "nd place";
    }
    if (placeToString.endsWith("3") || placeToString.endsWith("03")) {
      return placeToString + "rd place";
    } else {
      return placeToString + "th place";
    }
  }
  if (score < arr[arr.length - 1]) {
    if (lastStringIHope.endsWith("1") || lastStringIHope.endsWith("01")) {
      return lastStringIHope + "st place";
    }
    if (lastStringIHope.endsWith("2") || lastStringIHope.endsWith("02")) {
      return lastStringIHope + "nd place";
    }
    if (lastStringIHope.endsWith("3") || lastStringIHope.endsWith("03")) {
      return lastStringIHope + "rd place";
    } else {
      return lastStringIHope + "th place";
    }
  }
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === "undefined") {
  ageToAbilities = undefined;
}
if (typeof oddIndices === "undefined") {
  oddIndices = undefined;
}
if (typeof numOddValues === "undefined") {
  numOddValues = undefined;
}
if (typeof averageStringLength === "undefined") {
  averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === "undefined") {
  firstPunctuationIndex = undefined;
}
if (typeof getPlace === "undefined") {
  getPlace = undefined;
}

module.exports = {
  ageToAbilities,
  oddIndices,
  numOddValues,
  averageStringLength,
  firstPunctuationIndex,
  getPlace,
};
