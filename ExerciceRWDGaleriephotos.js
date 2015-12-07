//sur la base de <600px

//stockage des données h1+ p +a href
///////////////////////////////// A REMPLIR///////////////
var divs = [
  {titre:'monImage1',
    description:'blabla',
    url:'http://...'
  },
    {titre:'monImage2',
    description:'blabla',
    url:'http://...'
  },
    {titre:'monImage3',
    description:'blabla',
    url:'http://...'
  },
  ];



  for(var i in divs){
    console.log("div"+" "+i+":"+divs[i]);

    var body = document.getElementById("body");

    var titre = document.createElement("h1");

    body.appendChild(titre);
    titre.textContent = divs[i].description;



        // boite.style.backgroundColor = divs[propriete].couleur;
        // boite.style.width = divs[propriete].largeur+"px";
        // boite.style.height = divs[propriete].hauteur+"px";
        // boite.textContent = divs[propriete].texte;    }
        //






// //crea des divs dans la boucle for in :
//     for(var i in divs){
//         var body = document.getElementById("body");
//         //créée les elements
//         var titre  = document.createElement("h1");
//         var titre2 = document.createElement("h2");
//         var paragraphe = document.createElement("p");
//         var image = document.createElement("img");
//
//
//
//         body.appendChild(titre);
//         //donne leur des attributs
//         titre = document.createTextNode("Galerie");
//
//         //place les au bon endroit
//
//         // body.appendChild(titre2);
//         // body.appendChild(img);
//         // body.appendChild(paragraphe);
//
//
//
//
//         // importer les images
//         //contenu de TOUTE les balises
//
//       }
// // tester l'import d'une nouvelle donnée dans les divs
//
// //       function importeUnArticle(article){
// //         push.divs[propriete];
// //       };
// // divs.[0] = ["Yo";"Bwa";"u"];
// //       console.log(propriete[0]);
