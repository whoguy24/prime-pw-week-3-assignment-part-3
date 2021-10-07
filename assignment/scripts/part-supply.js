console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');

// STUDENT:
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

// STUDENT:
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

// STUDENT
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');

// STUDENT
console.log(supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

// STUDENT
for (let i = 0; i < supplyChanges.length; i++){
  let x = supplyChanges[i];
  if ( x>0 ) {
    console.log(`Added ${x} parts.`);
  } else if (x<0) {
    // STUDENT NOTE: It was annoying me that the console was returning "Removed -6 parts". This makes no sense in a strictly semantic sense, so I looked up how to calculate absolute value, and now here we are :)
    console.log(`Removed ${Math.abs(x)} parts.`);
  } else {
    console.log('No change.');
  }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

// STUDENT
for (let x of supplyChanges) {
  if ( x>0 ) {
    console.log(`Added ${x} parts.`);
  } else if (x<0) {
    console.log(`Removed ${Math.abs(x)} parts.`);
  } else {
    console.log('No change.');
  }
  x++;
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

// STUDENT
let i = 0
while (i<supplyChanges.length) {
  let x = supplyChanges[i];
  if ( x>0 ) {
    console.log(`Added ${x} parts.`);
  } else if (x<0) {
    console.log(`Removed ${Math.abs(x)} parts.`);
  } else {
    console.log('No change.');
  }
  i++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

// STUDENT
let totalSupplies = 0
for (let i = 0; i < supplyChanges.length; i++){
  let x = supplyChanges[i];
  totalSupplies = totalSupplies + x;
}
console.log(totalSupplies);
