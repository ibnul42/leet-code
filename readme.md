## 1. Two Sum

###### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

###### You may assume that each input would have exactly one solution, and you may not use the same element twice.

###### You can return the answer in any order.

## 27. Remove Element

###### Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

###### Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

###### Return k after placing the final result in the first k slots of nums.

###### Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## 26. Remove Duplicates from Sorted Array

###### Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

###### Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

###### Return k after placing the final result in the first k slots of nums.

###### Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## 9. Palindrome Number

###### Given an integer x, return true if x is palindrome integer.

###### An integer is a palindrome when it reads the same backward as forward.

###### For example, 121 is a palindrome while 123 is not.

## 69. Sqrt(x)

###### Given a non-negative integer x, compute and return the square root of x.

###### Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

###### Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x \*\* 0.5.

## 58. Length of Last Word

###### Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

###### A word is a maximal substring consisting of non-space characters only.

## 28. Implement strStr()

###### Implement strStr().

###### Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

###### Clarification:

###### What should we return when needle is an empty string? This is a great question to ask during an interview.

###### For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

## 1342. Number of Steps to Reduce a Number to Zero

###### Given an integer num, return the number of steps to reduce it to zero.

###### In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

## 66. Plus One

###### You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

###### Increment the large integer by one and return the resulting array of digits.

## 7. Reverse Integer

###### Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

###### Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## 1480. Running Sum of 1d Array

###### Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

###### Return the running sum of nums.

## 724. Find Pivot Index

###### Given an array of integers nums, calculate the pivot index of this array.

###### The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

###### If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

###### Return the leftmost pivot index. If no such index exists, return -1.

## 205. Isomorphic Strings

###### Given two strings s and t, determine if they are isomorphic.

###### Two strings s and t are isomorphic if the characters in s can be replaced to get t.

###### All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## 392. Is Subsequence

###### A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

# LeetCode 75

## 1768. Merge Strings Alternately

###### You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

###### Return the merged string.

# 1071. Greatest Common Divisor of Strings

###### For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

###### Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

# 605. Can Place Flowers

###### You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

###### Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

# 345. Reverse Vowels of a String

###### Given a string s, reverse only all the vowels in the string and return it.

###### The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# 151. Reverse Words in a String

###### Given an input string s, reverse the order of the words.

###### A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

###### Return a string of the words in reverse order concatenated by a single space.

###### Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

# 238. Product of Array Except Self

###### Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

###### The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

###### You must write an algorithm that runs in O(n) time and without using the division operation.

# 334. Increasing Triplet Subsequence

###### Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

# 30 Days of JavaScript

# 2667. Create Hello World Function

###### Write a function createHelloWorld. It should return a new function that always returns "Hello World".

# 2620. Counter

###### Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

# 2704. To Be Or Not To Be

###### Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

###### toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
###### notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

# 2635. Apply Transform Over Each Element in Array

###### Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

###### The returned array should be created such that returnedArray[i] = fn(arr[i], i).

###### Please solve it without the built-in Array.map method.

# 2634. Filter Elements from Array

###### Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

###### The fn function takes one or two arguments:

###### arr[i] - number from the arr
###### i - index of arr[i]
###### filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a ###### truthy value. A truthy value is a value where Boolean(value) returns true.

###### Please solve it without the built-in Array.filter method.

# 2626. Array Reduce Transformation

###### Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

###### This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

###### If the length of the array is 0, the function should return init.

###### Please solve it without using the built-in Array.reduce method.

# 2629. Function Composition

###### Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

###### The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

###### The function composition of an empty list of functions is the identity function f(x) = x.

###### You may assume each function in the array accepts one integer as input and returns one integer as output.

# 2703. Return Length of Arguments Passed

###### Write a function argumentsLength that returns the count of arguments passed to it.

# 2703. Return Length of Arguments Passed

######  Write a function argumentsLength that returns the count of arguments passed to it.

# 2666. Allow One Function Call

###### Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

###### The first time the returned function is called, it should return the same result as fn.
###### Every subsequent time it is called, it should return undefined.

# 2623. Memoize

###### Given a function fn, return a memoized version of that function.

###### A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

###### You can assume there are 3 possible input functions: sum, fib, and factorial.

###### sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
###### fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
###### factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
# 2723. Add Two Promises

###### Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

# 2621. Sleep

###### Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

# 2715. Timeout Cancellation

###### Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

###### After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

###### setTimeout(cancelFn, cancelTimeMs)
###### Initially, the execution of the function fn should be delayed by t milliseconds.

###### If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

# 2725. Interval Cancellation

###### Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

###### After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

###### setTimeout(cancelFn, cancelTimeMs)
###### The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

# 2637. Promise Time Limit

###### Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

###### The time limited function should follow these rules:

###### If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
###### If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

# 2622. Cache With Time Limit

###### Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

###### The class has three public methods:

###### set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

###### get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

###### count(): returns the count of un-expired keys.

# 2627. Debounce

###### Given a function fn and a time in milliseconds t, return a debounced version of that function.

###### A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

###### For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

###### The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

###### If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

# 2721. Execute Asynchronous Functions in Parallel

###### Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

###### promise resolves:

###### When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
###### promise rejects:

###### When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
###### Please solve it without using the built-in Promise.all function.

# 2727. Is Object Empty

###### Given an object or an array, return if it is empty.

###### An empty object contains no key-value pairs.
###### An empty array contains no elements.
###### You may assume the object or array is the output of JSON.parse.

# 2677. Chunk Array

###### Given an array arr and a chunk size size, return a chunked array.

###### A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

###### You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

###### Please solve it without using lodash's _.chunk function.

# 2619. Array Prototype Last

###### Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

###### You may assume the array is the output of JSON.parse.

# 2631. Group By

###### Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

###### A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

###### The provided callback fn will accept an item in the array and return a string key.

###### The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

###### Please solve it without lodash's _.groupBy function.

# 2724. Sort By

###### Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

###### You may assume that fn will never duplicate numbers for a given array.

# 2722. Join Two Arrays by ID

###### Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

###### joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

###### If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

###### If two objects share an id, their properties should be merged into a single object:

###### If a key only exists in one object, that single key-value pair should be included in the object.
###### If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

# 2625. Flatten Deeply Nested Array

###### Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

###### A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

###### A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

###### Please solve it without the built-in Array.flat method.

# 2695. Array Wrapper

###### Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

###### When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
###### When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

# 2726. Calculator with Method Chaining

###### Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

# 283. Move Zeroes

###### Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

###### Note that you must do this in-place without making a copy of the array.

# 643. Maximum Average Subarray I

###### You are given an integer array nums consisting of n elements, and an integer k.

###### Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

# 443. String Compression

###### Given an array of characters chars, compress it using the following algorithm:

###### Begin with an empty string s. For each group of consecutive repeating characters in chars:

###### If the group's length is 1, append the character to s.
###### Otherwise, append the character followed by the group's length.
###### The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

###### After you are done modifying the input array, return the new length of the array.

###### You must write an algorithm that uses only constant extra space.

# 1679. Max Number of K-Sum Pairs

###### You are given an integer array nums and an integer k.

###### In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

###### Return the maximum number of operations you can perform on the array.