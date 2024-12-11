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

