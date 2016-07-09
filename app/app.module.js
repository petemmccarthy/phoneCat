'use strict';

// Define the 'phonecatApp' module
angular.module('phonecatApp', [
  // ...which depends on the `phonList` module
  'ngRoute',
  'phoneDetail',
  'phoneList'
]);
