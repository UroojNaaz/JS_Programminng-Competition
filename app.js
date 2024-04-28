//Question # 01: Given an integer array nums, find a subarray that has the largest
//product, and return the product

let arr = [2,3,-2,4];
let n = arr.length;
function maxProduct(arr, n)
{
    let result = arr[0];
 
    for (let i = 0; i < n; i++) 
    {
        let mul = arr[i];
        for (let j = i + 1; j < n; j++) 
        {
            result = Math.max(result, mul);
            mul *= arr[j];
        }
        result = Math.max(result, mul);
    }
    return result;
}
console.log("Sub array product is " + maxProduct(arr, n));

//Question # 02: Given an array of integers nums and an integer target, return indices of
//the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the
//same element twice.


let num3= [2,7,11,15];

function twoSum(nums, target) {
    for(let i = 0; i <= nums.length; i++){
        for(let j = 0; j <= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

console.log( twoSum(num3, 9))

////Question # 03: Reverse each word in a given input string.


let string = "Welcome to this Javascript Guide!";

let reverseallstr = reverseWord(string,"");
//console.log(reverseallstr);

function reverseWord(string,separator){
    return string.split(separator).reverse().join(separator);
  }

var output = reverseWord(reverseallstr," ");
console.log(output);
//Question # 04: Write a JavaScript program to display the reading status (i.e. display
//book name, author name and reading status) of the following books.

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = " " + library[i].title + " " + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//Question # 05:
//Write a JavaScript function to convert an amount into coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//You can return the answer in any order.//


function toCoins(n,arr) {
    if(n === 0) {
      return [];
    }
    else {
      if(n >= arr[0]) {
        var t = n - arr[0];
        return [arr[0]].concat(toCoins(t,arr));
      }
      else {
        arr.shift();
        return toCoins(n,arr);
      } 
    }
  }
  
function Output() {
    var result = toCoins(46,[25,10,5,2,1]);
    return result;
  }
console.log(Output());
