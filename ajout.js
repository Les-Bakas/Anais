function afficher(){
	let ajout = document.getElementById("ajout");
	ajout.style.display="block";
}

document.getElementById("fermer").onclick= fermer;

function fermer(){
	let fermer= document.getElementById("ajout");
	fermer.style.display="none";

}