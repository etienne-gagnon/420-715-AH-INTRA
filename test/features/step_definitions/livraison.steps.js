const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

function calculerLivraison(status, sousTotal, distance) {
  if (status === "premium") {
    return 0; 
  } else if (status === "standard") {
    const tax = 2; 
    if (sousTotal > 150) {
      return tax; 
    } else {
      if (distance < 10) {
        return 5 + tax; 
      } else if (distance > 10 && distance < 50) {
        return 10 + tax; 
      } else if (distance > 50) {
        return 20 + tax; 
      }
    }
  }
}


let status;
let sousTotal;
let distance;
let montantFinal;

Given('Le client est un membre {string}', (clientStatus) => {
  status = clientStatus;
});

Given('un membre standard avec sous-total > {string}', (total) => {
  status = "standard";
  sousTotal = parseFloat(total) + 1; 
  distance = 0; 
});

Given('un membre standard avec sous-total < {string} et distance < {string}', (total, dist) => {
  status = "standard";
  sousTotal = parseFloat(total) - 1; 
  distance = parseFloat(dist) - 1; 
});

Given('un membre standard avec sous-total < {string} et distance > {string} et < {string}', (total, minDist, maxDist) => {
  status = "standard";
  sousTotal = parseFloat(total) - 1;
  distance = (parseFloat(minDist) + parseFloat(maxDist)) / 2;
});

Given('un membre standard avec sous-total < {string} et distance > {string}', (total, dist) => {
  status = "standard";
  sousTotal = parseFloat(total) - 1; 
  distance = parseFloat(dist) + 1; 
});

When('je calcule la livraison', () => {
  montantFinal = calculerLivraison(status, sousTotal, distance);
});

Then('le montant final doit être {string}', (resultatAttendu) => {
  assert.strictEqual(montantFinal, parseFloat(resultatAttendu)); 
});
