/*
		Auteur : Joël Dendaletche
		Contenu : construction de la liste des items du sommaire
		Date de création : 23 / 09 /2019
  
 */
// ressources typographique à copier /coller : À Á Â Ä Æ Ç É È Ê Ë Î Ï  Ô Ö Ø  OE Ú Ù Û Ü 



// déclarations des variables globales (var vs let) et initialisation
var tabItems = new Array()								;

var baseURL = "http://jodenda.free.fr/programmeNSI/"					;
var URLs = ["../niveau_0.html","programmeNSIpremier_0.html","programmeNSITerm_0.html"]	;

// liste des contenus (innerTHML) des items
tabItems = [	"enseignement de SNT en seconde"					,         
		"enseignement de NSI en première"					,
		"enseignement de NSI en terminale"		]			;	

// Constantes
const nItems = tabItems.length								; // ne change pas

// fonction appelée par onload dans la balise body ou par init ()
function construireListeSommaire () {
	
	var listeSommaire = document.getElementById("listeSommaire")			;
	
	listeSommaire.innerHTML = "<h2>Sommaire :</h2><ul> <li>"+
				  "<a href='index.html' >Accueil du site</a></li>"	;
	
	for (var i=0; i < nItems; i++) {
		listeSommaire.innerHTML += "<li><a href='" + baseURL + URLs[i] + 
					   "' target='_blank' >" + tabItems[i] + 
					   "</a></li>"					;
		}
	listeSommaire.innerHTML += 	"<li><a href='https://www.iut-rodez.fr/fr/"+
		"les-formations/but-informatique/but-informatique-programme'" +
		" target='_blank' >" +"programme du BUT d'informatique</a></li>"	;
	
	listeSommaire.innerHTML += "</ul>";
	}
construireListeSommaire ();
/* autre méthode de constuction utilisant les propriétés du DOM : document object model | // commentaires                         
   _____________________________________________________________________________________| // ______________________________________
function construireListeSommaire2 () {
	// déclaration des variables locales (let vs. var) et initialisation
	let 	nItemms = tabItems.length						, 
	    	item									, // un des items du menu : <li> 
	    	lien									, // lien vers href
		listeSommaire = document.getElementById("listeSommaire")		, 
	    	i									, // index de boucle for
		menu = document.createElement("ul")					; // objet menu : balise <ul> = liste à puces
	
	for (var i=0; i < nItems; i++) {
		item 		= document.createElement("li")				;			
		lien 		= document.createElement("a")				;
		lien.href 	= baseURL + URLs[i]					;
		lien.innerHTML	= tabItems[i]						;
		lien.alt 	= "lien vers " + tabItems[i]				;	
		lien.title 	= "lien vers " + tabItems[i]				;
		
		item.appendChild(lien)							;
		menu.appendChild(item)							;
	}
	// items supplémentaires
	item 		= document.createElement("li")					;
	lien 		= document.createElement("a")					;
	lien.href 	= "https://www.iut-rodez.fr/fr/les-formations/but-informatique"+
			  "/but-informatique-programme"					;
	lien.innerHTML	= "programme du BUT d'informatique"				;
	lien.alt 	= "lien vers programme du BUT d'informatique"			;	
	lien.title 	= "lien vers programme du BUT d'informatique"			;
	item.appendChild(lien)								;
	menu.appendChild(item)								;
	listeSommaire.appendChild(menu)							;
}
*/

