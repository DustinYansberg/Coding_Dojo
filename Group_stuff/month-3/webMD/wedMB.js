/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

const medications = [
  {
    name: "Sulforaphane",
    treatableSymptoms: [
      "dementia",
      "alzheimer's",
      "inflammation",
      "neuropathy",
    ],
  },
  {
    name: "Longvida Curcumin",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "depression",
      "arthritis",
      "anxiety",
    ],
  },
  {
    name: "Hericium erinaceus",
    treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
  },
  {
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
      "ageing",
      "low NAD",
      "obesity",
      "mitochondrial myopathy",
      "diabetes",
    ],
  },
  {
    name: "PainAssassinator",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "cramps",
      "headache",
      "toothache",
      "back pain",
      "fever",
    ],
  },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) {
  let highestNumOfTreatedSymptoms = -1;
  let bestMedsArr = [];

  for (const med of meds) {
    //loop through meds and then match their treatable symptoms with ailments
    let symptomCount = 0;
    for (const ailment of ailments) {
      if (med.treatableSymptoms.includes(ailment)) {
        symptomCount++;
      }
    }
    if (symptomCount === 0) {
      // don't add it to the array if it treats nothing
      continue;
    }
    symptomCount === highestNumOfTreatedSymptoms // if this med matches the best symptom count, add it to the array
      ? bestMedsArr.push(med.name)
      : symptomCount > highestNumOfTreatedSymptoms && // if this med has more treatable symptoms, reset the array to only include this med
        ((bestMedsArr = [med.name]),
        (highestNumOfTreatedSymptoms = symptomCount));
  }
  return bestMedsArr;
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));
