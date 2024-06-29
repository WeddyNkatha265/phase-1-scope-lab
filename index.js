// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = ',,';
function changeLeastFavoriteCustomer(){ 
    leastFavoriteCustomer =  '.'
}
