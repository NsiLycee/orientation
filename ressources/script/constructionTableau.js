/**************************************************
			   Construction du tableau de présentation des thèmes  */
    let debug = document.getElementById("debug");

    const 	TERMINALE = 0,
        PREMIERE  = 1,
        SECONDE   = 2;
    let 	participants = [ ["Jarod","Léali","Eric","Benjamin","Robin","Alexandre"]	        ,
                     ["Juliette","Simon","Lilo","Charlotte","Gaël","Tom"]		                ,
                     ["Carla","Sarah","Juliette","Adriain","Adam","Alexia"] ]	                ,
                        avatars = ["clara.png", "clara01.png", "clara02.png", "claro01.png"     ,
               "clara03.png","claro02.png", "claro03.png", "claro04.png", "claro05.png"]	    ,
        co, niveau, N = participants[TERMINALE].length, M = participants.length		            ,
        contenuTableau = ""	,
        pathAvatar = "./ressources/images/avatars/"                                             ,
        nomNiveaux = ["terminale", "première", "seconde"]				                        ,
        image, nIm = avatars.length         				                                    ;

    function construireTableau1(debug = false) {
    let i;

    contenuTableau = "<caption>Participants</caption><tr><th>groupe</th>"+
                        "<th>Avatars</th><th>théme de travail</th></tr>";
    for (i=0; i < N; i++) {
        contenuTableau += "<tr>";
        contenuTableau += "<td>"+participants[TERMINALE][i]+" "+participants[PREMIERE][i]+
        " "+participants[SECONDE][i]+"</td><td>";

        for (niveau=TERMINALE; niveau < M; niveau++) {
            // tirage aléatoire de l'image servant d'avatar sauf pour ...
            if (participants[niveau][i] == 'Benjamin') { image = "benji01.png";}
	    else if (participants[i][j] == 'Léali') {image = "leali.png";}
            else { image = avatars[Math.floor(Math.random()*nIm)]; }
            contenuTableau +="<img class='avatar' src='"+pathAvatar+image+
                            "' alt='Avatar provisoire de "+participants[niveau][i];
            contenuTableau += "' title='Avatar provisoire de "+participants[niveau][i]+
                            " en "+nomNiveaux[niveau]+"' />";
            }
        contenuTableau += "</td><td></td></tr>";
        }
    document.getElementById("thematiques").innerHTML = contenuTableau;
    if (debug) {debug.innerHTML = document.getElementById("thematiques").outerHTML;}
    }

    let profs = ["Joël Dendaletche", "Mathieu Palosse"],
        avatarProfs = ["jodenda.png", "math.png"],
        statutsProf = ["enseignant NSI/Biotechnologies", "enseignant NSI/Math"];

    // construction du tableau des participants au projet
    function construireTableau2(debug = true) { // méthode de construction alternative
        let i, j, P = profs.length, milieuTab, nIm = avatars.length;

        let titreTab = document.createElement("caption");
        titreTab.innerHTML = "Participants";
        let tabParticipants =  document.getElementById("participants");
        tabParticipants.appendChild(titreTab); // ajout du titre (caption)

        let hautTab = document.createElement("tbody"); // création de la liste des profs

        let ligne, cellule, img, titres = ["nom", "avatar", "statut"], image;

        // construction chronologique du tableau prof
        ligne = document.createElement('tr');
        for (j=0; j < 3; j++) {
            cellule = document.createElement('th');
            cellule.innerHTML = titres[j];
            ligne.appendChild(cellule);
            }
        hautTab.appendChild(ligne);
        tabParticipants.appendChild(hautTab);

        for (i=0; i < P; i++) {
            ligne = document.createElement('tr');

            cellule = document.createElement('td');
            cellule.innerHTML = profs[i];
            ligne.appendChild(cellule);

            cellule = document.createElement('td');
            img = document.createElement('img');
            img.setAttribute("alt", "avatar de "+profs[i]);
            img.setAttribute("title", "avatar de "+profs[i]);
            img.setAttribute("src", pathAvatar + avatarProfs[i]);
            cellule.appendChild(img);
            ligne.appendChild(cellule);

            cellule = document.createElement('td');
            cellule.innerHTML = statutsProf[i];
            ligne.appendChild(cellule);

            hautTab.appendChild(ligne);
        }
        tabParticipants.appendChild(hautTab);

        milieuTab = document.createElement('tbody');
        for (i=0; i < M; i++) { // 3 niveaux
            for (j=0; j < N; j++) { // 6 élèves de chaque niveau
                ligne = document.createElement('tr');
                cellule = document.createElement('td');
                cellule.innerHTML = participants[i][j];
                ligne.appendChild(cellule);

                // tirage aléatoire de l'image servant d'avatar sauf pour ...
                if (participants[i][j] == 'Benjamin') { image = "benji01.png";}
                else if (participants[i][j] == 'Léali') {image = "leali.png";}
		else { image = avatars[Math.floor(Math.random()*nIm)]; }

                img = document.createElement('img');
                img.alt   = "Avatar provisoire de " + participants[i][j];
                img.title = "Avatar provisoire de " + participants[i][j];
                img.src = pathAvatar+image;

                cellule = document.createElement('td');
                cellule.appendChild(img);
                ligne.appendChild(cellule);

                cellule = document.createElement('td');
                cellule.innerHTML = "élève en " + nomNiveaux[i];
                ligne.appendChild(cellule);

                milieuTab.appendChild(ligne)
            }
        }
    tabParticipants.appendChild(milieuTab);
    }

    construireTableau1(); // méthode utilisant innerHTML
    construireTableau2(); // méthode utilisant createElement puis appendChild

