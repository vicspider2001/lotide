# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vicspider/lotide`

**Require it:**

`const _ = require('@vicspider/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: get the head of an array
* `tail(...)`: get the tail of an array
* `middle(...)`: get the middle of an array
* `countLetters(...)`: count how many letters in any sentence
* `findKey(...)`: get key of an object
* `flatten(...)`: flatten the elements of of an array
* `findKey(...)`: get key of an object
* `letterPosition(...)`: this function will return all the indices (zero-based    positions) in the string where each character is found
* `findKeyByValue(...)`: this function will help us search for a key on an object where its value matches a given value.
* `map(...)`: get key of an object
* `takeUntil(...)`: takeUntil function takes an array and a callback. It returns a new array with elements from the original array up until the callback returns a truthy value.

* `without(...)`: without function will take in a source and itemToRemove arrays and return a new array with only those elements from source array that are not present in the itemsToRemove array


Installation Instruction : 
1. Install Node.js:
Make sure you have Node.js installed on your machine. You can download it from https://nodejs.org/.

2. Create a new Node.js project:
Open your terminal, navigate to your project directory, and run the following command to initialize a new Node.js project: npm init -y

3. Install Lotide:
Run the following command to install Lotide as a dependency in your project:
npm install lotide: npm install @vicspider/lotide. This will add Lotide to your package.json file and install it in the node_modules directory.

4. Require Lotide in your code:
In your JavaScript files, require Lotide by adding the following line at the top: 
const _ = require('lotide');

Now you can use the various utility functions provided by Lotide in your project.

Thank you!