// MEMBRE PREMIUM OU STANDARD

// PREMIUM

    // -> 0$ LA LIVRAISON


// STANDARD 

    // COÛT DE LA LIVRAISON

        // SOUS TOTAL > 150$

        // DISTANCES DE LIVRAISON

    // AJOUT DE LA TAXE DE 2$


function calculerLivraison(status, sousTotal, distance){

    if(status == undefined || sousTotal == undefined || distance == undefined){
        return "Tous les paramètres sont obligatoires";
    }else if(status !== "standard" && status !== "premium"){
        return "Le status doit être premium ou standard";
    }else if(typeof sousTotal == "string"){
        return "Le sous-total doit être un nombre";
    }else if(typeof distance == "string"){
        return "La distance doit être un nombre";
    }else if(status == "premium"){
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

test('Si status est manquant= erreur', () => {
    expect(calculerLivraison(11.11, 22.22)).toBe("Tous les paramètres sont obligatoires");
   });

test('Si sousTotal est manquant= erreur', () => {
    expect(calculerLivraison("standard", 22.22)).toBe("Tous les paramètres sont obligatoires");
   });

test('Si distance est manquant = erreur', () => {
    expect(calculerLivraison("standard", 11.11)).toBe("Tous les paramètres sont obligatoires");
   });


test('Si status n\'est pas premium ou standard = erreur', () => {
    expect(calculerLivraison("autre", 11.11, 22.22)).toBe("Le status doit être premium ou standard");
   });

test('Si le sous total n\est pas un nombre = erreur', () => {
    expect(calculerLivraison("standard", "11.11", 22.22)).toBe("Le sous-total doit être un nombre");
   });

test('Si la distance n\est pas un nombre = erreur', () => {
    expect(calculerLivraison("standard", 11.11, "22.22")).toBe("La distance doit être un nombre");
   });

test('Si le status est premium = total 0$', () => {
    expect(calculerLivraison("premium", 11.11, 11.22)).toBe(0);
   })

test('Si le status est standard et sousTotal > 150 = total 2$ ', () => {
    expect(calculerLivraison("standard", 151, 11.22)).toBe(2);
   })

test('Si le status est standard et sousTotal < 150 et que distance < 10 = total 7$', () => {
    expect(calculerLivraison("standard", 10.53, 3)).toBe(7);
   })

test('Si le status est standard et sousTotal < 150 et que distance > 10 et < 50 = total 12$', () => {
    expect(calculerLivraison("standard", 10.53, 25)).toBe(12);
   })

test('Si le status est standard et sousTotal < 150 et que distance > 50 = total 22$', () => {
    expect(calculerLivraison("standard", 10.53, 105)).toBe(22);
   })