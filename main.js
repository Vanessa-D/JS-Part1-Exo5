 // Fonction qui récupère les valeurs saisies dans les input et affiche leur produit  
 function myFunction() {
    let first =document.getElementById("first_number").value;
    let second =document.getElementById("second_number").value;
    if(first && second){
        alert(`Résultat : ${first * second}`);
    }else{
        alert(`Rentre un truc !`);
    }
 }