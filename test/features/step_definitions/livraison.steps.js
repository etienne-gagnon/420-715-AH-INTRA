const { Given, When, Then } = require('@cucumber/cucumber');

function calculerLivraison(status, sousTotal, distance){
  if(status == "premium"){
      let livraison = 0;
      let tax = 0;

      return parseFloat(livraison) + parseFloat(tax);
  }else if(status == "standard"){
      let tax = 2;
      if(sousTotal > 150){
          livraison = 0;
          return parseFloat(livraison) + parseFloat(tax);
      }else{
          if(distance < 10){
              livraison = 5;
              return parseFloat(livraison) + parseFloat(tax);
          }else if(distance > 10 && distance < 50){
              livraison = 10;
              return parseFloat(livraison) + parseFloat(tax);
          }else if(distance > 50){
              livraison = 20;
              return parseFloat(livraison) + parseFloat(tax);
          }
      }
  }
}



Given('un membre premium', function () {
  this.estPremium = true;
});

Given('un membre standard avec sous-total > {string}', function (sousTotal) {
  this.estPremium = false;
  this.sousTotal = parseFloat(sousTotal);
});

Given('un membre standard avec sous-total < {string} et distance < {string}', function (sousTotal, distance) {
  this.estPremium = false;
  this.sousTotal = parseFloat(sousTotal);
  this.distance = parseFloat(distance);
});

Given('un membre standard avec sous-total < {string} et distance > {string} et < {string}', function (sousTotal, distance1) {
  this.estPremium = false;
  this.sousTotal = parseFloat(sousTotal);
  this.distance = parseFloat(distance1) + 1;
});

Given('un membre standard avec sous-total < {string} et distance > {string}', function (sousTotal, distance) {
  this.estPremium = false;
  this.sousTotal = parseFloat(sousTotal);
  this.distance = parseFloat(distance) + 1;
});

When('je calcule la livraison', function () {
  this.livraison = calculerLivraison(this.estPremium, this.sousTotal, this.distance);
});

Then('le montant final doit être {string}', function (total) {
  const expected = parseFloat(total);
  expect(this.livraison).to.equal(expected);
});