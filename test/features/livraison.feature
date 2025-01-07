
Feature: Calcul de la livraison pour un e-commerce

  Scenario: Livraison gratuite pour un membre premium
    Given Le client estmembre premium
    When je calcule le montant
    Then total doit être "0"
    
  Scenario: Livraison "0" et tax "2" pour un membre standard avec sous-total > "150"
    Given un membre standard avec sous-total > "150"
    When je calcule la livraison
    Then le montant final doit être "2"

  Scenario: Livraison "5" et tax "2" pour un membre standard avec sous-total < "150" et distance < "10"
    Given un membre standard avec sous-total < "150" et distance < "10"
    When je calcule la livraison
    Then le montant final doit être "7"

  Scenario: Livraison "10" et tax "2" pour un membre standard avec sous-total < "150" et distance > "10" et < "50"
    Given un membre standard avec sous-total < "150" et distance > "10" et < "50"
    When je calcule la livraison
    Then le montant final doit être "12"

  Scenario: Livraison "20" et tax "2" pour un membre standard avec sous-total < "150" et distance > "50"
    Given un membre standard avec sous-total < "150" et distance > "50"
    When je calcule la livraison
    Then le montant final doit être "22"