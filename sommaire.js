/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 23 / 09 /2019
  
 */
// ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 



// déclarations des variables
var tabItems = []; // éviter new tabItems = Array();
var baseURL = "http://jodenda.free.fr/";

// initialisation des listes
tabItems = ["enseignement de <abbr title='sciences numériques et technologies'>SNT</abbr> en seconde",          
			"enseignement de <abbr title='Numérique et Sciences Informatiques'>NSI</abbr> en première",
			"enseignement de abbr title='Numérique et Sciences Informatiques'>NSI</abbr> en terminale",
			'divers exemples de pages dynamiques avec du javaScript' ];												//7
const nItems = tabItems.length; // const = ne change pas


// fonction appelée par onload dans la balise body ou par init ()
function construireListeSommaire () {
	
	var listeSommaire = document.getElementById("listeSommaire");
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li><a href='index.html' style='font-size:200%;'" +
				  " target='_blank'>Accueil du site</a></li>";
	
	for (var i=0; i < nItems-1; i++) {
		listeSommaire.innerHTML += "<li><a href='"+baseURL+"niveau_"+i+ ".html' target='_blank' >" +tabItems[i]+"</a></li>";
		}
		
	listeSommaire.innerHTML += "<li><a href='"+baseURL+"exemples/unicode.html' target='_blank' >" +tabItems[nItems-1]+"</a></li>";
	listeSommaire.innerHTML += "</ul>";
	}
