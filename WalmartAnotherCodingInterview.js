/*
You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random string.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled inside the string, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"]
string1 = "ctay"
find(words, string1) => "cat"   (the letters do not have to be in order)  
  
string2 = "bcanihjsrrrferet"
find(words, string2) => "cat"   (the letters do not have to be together)  
  
string3 = "tbaykkjlga"
find(words, string3) => "-"     (the letters cannot be reused)  
  
string4 = "bbbblkkjbaby"
find(words, string4) => "baby"    
  
string5 = "dad"
find(words, string5) => "-"    
  
string6 = "breadmaking"
find(words, string6) => "bird"    

All Test Cases:
find(words, string1) -> "cat"
find(words, string2) -> "cat"
find(words, string3) -> "-"
find(words, string4) -> "baby"
find(words, string5) -> "-"
find(words, string6) -> "bird"
  
Complexity analysis variables:  
4
W = number of words in `words`  
S = maximal length of each word or string  

*/


"use strict";

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"];
const string1 = "ctay";
const string2 = "bcanihjsrrrferet";
const string3 = "tbaykkjlga";
const string4 = "bbbblkkjbaby";
const string5 = "dad";
const string6 = "breadmaking";


const constructCharCountObject = (str) => {
  
  var objCount = {}
  
  console.log('***before splitted string', str)
  var splittedString = str.split('');
    console.log('***after splitted string', splittedString)
  for(var i=0;i<splittedString.length;i++){
    if(objCount[splittedString[i]] !== undefined){
    
        objCount = {
          ...objCount,
          [splittedString[i]]: objCount[splittedString[i]] + 1
        }
    } else {
      
          objCount = {
          
          ...objCount,
          [splittedString[i]]: 1
        }
    }
  }
  
  return objCount;
  
}

function compareBothObjects(source, target) {
  
    let matchingCount = 0;
  
    for(const property in source) {

        if(target && target[property] === source && source[property]){
          matchingCount += 1;
        }
      
    }
    
    return matchingCount > 2;
}

function isScrambled(eachItemFromArray, scrambledString) {
  
  let countObject_item = constructCharCountObject(eachItemFromArray);
  let countObject_scrambled = constructCharCountObject(scrambledString);
  
  
  return compareBothObjects(countObject_item, countObject_scrambled)
  
  // now need to do near comparision between tow objects
  
  
  
 // return false;
}



function findScramble(input, scrambledSource) {
  
  let result = [];
  
  
  for(var i=0;i<input.length;i++){
        
    let isScrambledString = isScrambled(input[i], scrambledSource);
    
    if(isScrambledString){
      result.push(words[i]);
    }
  }
  
  const output = result.length > 1 ?  result : '-'
  return output
}


console.log(findScramble(words, string4))
