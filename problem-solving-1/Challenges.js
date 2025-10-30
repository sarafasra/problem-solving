const prompt = require("prompt-sync")();

/*let n = +prompt("Donner un nombre: ");
let count = 0;
let x = "";

let tab = [];

// 1
x = "1".repeat(n);
count++;
tab.push([...x].join("+"));
x = "";

console.log(count);
console.log(tab);*/



/*let n = parseInt(prompt("entrer un nombre"));
for (let i=1 ;i<=n;i++){

    if(n %3===0){

        console.log("Tech");

    }else if(n %5===0){

        console.log("Lead ");

    }else if(n %3 && n%5 ===0){

        console.log ("TechLead ");
    }
    else {
         console.log("affiche le nombre lui-même") 
    }
}*/



/*let tab = [ 1, 2, 2, 3, 4, 4, 5];

  let nouveautable = [];

   for (let i =0; i < tab.length; i++){
    if (nouveautable.includes(tab[i] ) != true) {
        nouveautable.push(tab[i])
    }
   }

   console.log (nouveautable);*/


   /*let table = [2, 4, 6, -3, 5, 7] ;
   let somme = 0;
   for (let i=0;i<table.length;i++){
    if (table[i]<0){break}
        else{somme=somme+table[i]
    }
     
   }
console.log (somme);*/



/*let tabl = [1, 2, 3];
for (let i=tabl.length-1;i>=0;i--){
    tabl.push(tabl[i])
}
console.log(tabl);*/

let tab = ["a", "e", "i", "o", "u"];
let mots = "developpement"
 let count = 0 ;
for (let i = 0; i < mots.length; i++){
  
for (let j = 0; j < tab.length; j++){
    
    if (mots[i]==tab[j]) {
        count++
    }
}
}
console.log(count);

