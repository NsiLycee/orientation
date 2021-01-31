/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 23 / 09 /2019
  
 */
// ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 



// déclarations des variables
var tabItems = new Array();

var baseURL = "niveau";


// initialisation des listes
tabItems = ["enseignement de SNT en seconde",         
			"enseignement de NSI en première",
			"enseignement de NSI en terminale"];	

const nItems = tabItems.length; // ne change pas

// fonction appelée par onload dans la balise body ou par init ()
function construireListeSommaire () {
	
	var listeSommaire = document.getElementById("listeSommaire");
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li><a href='index.html' >Accueil du site</a></li>";
	
	for (var i=0; i < nItems; i++) {
		listeSommaire.innerHTML += "<li><a href='"+baseURL+"_"+i+ ".html' target='_blank' >" +tabItems[i]+"</a></li>";
		}
	listeSommaire.innerHTML += "</ul>";
	}
