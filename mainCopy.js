// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const sample = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const extra1 = [5,3,0,9,4,1,7,5,5,2,5,8,2,6,6,3];

const extra2 = '89237862';
const extra3 = '4539404967869666';
const extra4 = '6011144340682905';

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, sample, extra1];

let numbersChecked = [];

// Add your functions below:
function validateCred(numbers) {

  inputChecker(numbers);
  console.log(numbersChecked);
  
  
  let iCounter = 0;
  let sumNumbers =0;

 
  for (let i = numbersChecked.length-1; i >= 0; i--) {
    iCounter ++;
    let toAdd;
    if (iCounter % 2 === 0) {
      toAdd = numbersChecked[i]*2;
        if (toAdd > 9) {
          toAdd = toAdd-9;
        }
    } else {
      toAdd = numbersChecked[i];
    }
    sumNumbers = sumNumbers + toAdd;
  }
  if (sumNumbers % 10 == 0) {
  console.log('Card is valid');
    return 'valid';}
  else {
    console.log('Card is invalid');
    return 'invalid';
  }
}

let validCards = [];  
let inValidCards = [];

function findInvalidCards(multipleCards) {
  for (let cc = 0;cc < multipleCards.length; cc++) {
    if (
    validateCred(multipleCards[cc]) === 'valid') {  
    validCards.push(multipleCards[cc]);  
  } else {
    inValidCards.push(multipleCards[cc]);
  } 
  
  }
  console.log('\n'+'number of valid cards: ' + validCards.length+'\n');
  console.log('number of invalid cards: '+inValidCards.length+'\n');
}

findInvalidCards(batch);

let compsFoundDigits = [];
let compsFoundNames = [];

//nieuwe functie 
function idInvalidCardCompanies(inValidCards){
const compDigits = [3,4,5,6];

for (let i = 0; i < inValidCards.length;i++) {
  for (let j = 0; j < compDigits.length;j++ ) {
    if (inValidCards[j][0] === compDigits[i]) {
      console.log('company identified! '+compDigits[i]);
      compsFoundDigits.push(compDigits[i]);   
      } 
    }
  }

//make a new array with company names instead of numbers
for (let n = 0; n < compsFoundDigits.length; n++) {
  switch (compsFoundDigits[n]) {
    case 3:
    compsFoundNames.push("Amex (American Express)");
      break;
    case 4:
      compsFoundNames.push("Visa");
      break;
    case 5:
      compsFoundNames.push("Mastercard");
      break;
    case 6:
      compsFoundNames.push("Discover");
      default: 
      console.log('Company not found!');
  }
}
  console.log(compsFoundNames);
}

idInvalidCardCompanies(batch);

//EXTRA: helper function change string to array of numbers

function isString (value) {
return typeof value === 'string' || value instanceof String;
}


function inputChecker (numbers) {
  //set as loop to check if its already an array (split does not work on an array)
 
  if (isString (numbers))
  
  {
  let stringArray = numbers.split('');
  console.log(stringArray);
  
  
  
  for (s = 0; s < stringArray.length;s++) {
    numbersChecked.push(parseInt(stringArray[s],10));
  }
  console.log(numbersChecked);
  }
 else { 
  numbersChecked = numbers; 
  return } 
}


function makeNumberValid (falseNumber) {

//1. display the number
console.log('Original number: ')
console.log(falseNumber);

//2.Drop the last digit. i will store it in a variable first (?)
//2a. Store the lastDigit in a variable & test
let lastDigit;
lastDigit = falseNumber[falseNumber.length-1]
console.log('The last digit is:')
console.log(lastDigit);

//2b. Drop the last digit
//changingNumber = falseNumber;
//changingNumber.pop();

let changingNumber = falseNumber.slice(0,(falseNumber.length-1));


console.log('Without the last digit')
console.log(changingNumber);

//3. Reverse the numbers
changingNumber.reverse();
console.log('The number in reverse:')
console.log(changingNumber);

//4. Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
//4a. Setting variables outside the loop scope, but inside the function
let iCounter2 = 0;
let cardTotal = 0;
//4b. Multiply and substract 9
for (n = 0;n < changingNumber.length;n++) {
  iCounter2 ++;
    let toAdd;
    if (iCounter2 % 2 !== 0) {
      toAdd = changingNumber[n]*2;
        if (toAdd > 9) {
          toAdd = toAdd-9;
        }
    } else {
      toAdd = changingNumber[n];
    }

    //5. Add all the numbers together (this still happens during the loop)
  cardTotal += toAdd;

}
console.log(cardTotal);

//6. Change the checkDigit (lastDigit) tot a number where tthe total of cardTotal+lastDigit would equal modulo %10 (a multiple of 10)
//a. Determine what lastDigit should be

if (cardTotal % 10 === 0) {
  lastDigit = 0;
  console.log ('the checkDigit = '+lastDigit);
  cardTotal += lastDigit;
  console.log('the total know =' + cardTotal);
  console.log('the modulo now = '+ (cardTotal %10));
} else {
  console.log(cardTotal%10);
  lastDigit = (10-(cardTotal%10));
  console.log(lastDigit);
  cardTotal += lastDigit;
  console.log(cardTotal);
  
  if (cardTotal%10 === 0) {
    console.log('The card is now valid');
  } else {
    console.log('STILL NOT VALID. something wrong in your code..')
  }

}
//7. Display the new card valid card number. Store in a new variable to avoid confusion
//7a. reverse the numbers again
let newValidNumber = changingNumber.reverse();



//8. Extra extra. I would like to display the old false number followed by the newValidNumber
//set a new variable for the adjusted falsenumber, therefore keeping the original. call it by using the parameter from this function
//call it
console.log('The old invalid number:' );
console.log(falseNumber);
//7b. Add the new last digit to the number (array)
newValidNumber.push(lastDigit)
console.log('The new valid number is: ');
console.log(newValidNumber);

}



makeNumberValid(invalid3);