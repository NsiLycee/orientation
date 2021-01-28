/*
   
   
   Test javascript


*/
var globale, rebour = 5;

// fonction qui s'appelle elle-même au chargement de la page
(function() {
    let parag1 = document.createElement("p");
    let parag2 = document.createElement("p");
    
    parag1.innerHTML = "Ce paragraphe va s'autodétruire dans "+ rebour +" secondes !";
    parag1.style.background = "rgb(200,255,200)";
    parag1.style.color = "rgb(55,0,55)";
    document.body.appendChild(parag1);
    
    parag2.innerHTML = "Compte = " + rebour + " secondes";
    parag2.style.background = "rgb(200,255,200)";
    parag2.style.color = "rgb(55,0,55)";
    document.body.appendChild(parag2);
    
    globale = setInterval(compte,1000);
    setTimeout(bang, rebour*1000);
})();

function bang () {
    clearInterval(globale);
    
    let N = document.getElementsByTagName("p").length;
    document.body.removeChild(document.getElementsByTagName("p")[N-1]); //ou bien plus simplement 
    // dernier paragraphe
    //document.body.removeChild(document.body.lastChild);
    document.body.removeChild(document.getElementsByTagName("p")[N-2])
}
function compte () {
	let N = document.getElementsByTagName("p").length;
    
    // dernier paragraphe
    document.getElementsByTagName("p")[N-1].innerHTML = "Compte = " + rebour + " secondes";
    rebour -= 1;
}
