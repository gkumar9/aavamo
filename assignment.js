'use strict'

const fetch = require('node-fetch')

let url='http://norvig.com/big.txt';

async function fecthData(url){
    let response = await fetch(url).then(function (res) {
        return res.text();
      });
    console.log(response);
    countOccurenence(response);
    }

async function countOccurenence(response) {  
    console.log('_______________________Count:');
    var count = (response.match(/is/g) || []).length;
    console.log(count);
    }  

fecthData(url);