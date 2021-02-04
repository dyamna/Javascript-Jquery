let tableau = [];



/*
	<tr>
		<td class="col-10">Pomme</td>
		<td class="col-2"><button class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
	</tr>
*/		
function getLigne(fruit){
	// je crée la balise tr
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	// on ajoute l enfant <td> a <tr>
	tr.appendChild(td1);
	tr.appendChild(td2);
	td1.setAttribute('class','col-10');
	td1.textContent = fruit;
	td2.setAttribute('class','col-2');
	let btn = document.createElement('button');
	btn.setAttribute('class','btn-danger');
	// je met le btn ds td2
	td2.appendChild(btn);
	let icon = document.createElement('i');
	icon.setAttribute('class','fa fa-trash');
	// je met l icone ds le btn
	btn.appendChild(icon);
	btn.onclick = function (){
		let indice = this.parentElement.parentElement.rowIndex -1;
		console.log(indice);
		tableau.splice(indice,1);
		console.log(tableau);
		this.parentElement.parentElement.remove();
	};
	return tr;
}


function ajout(){
	// on récupère le champs input
	let fruit = document.getElementById('fruit').value;
	// on vide le champ input
	document.getElementById('fruit').value = '';
	// ajoute ds le tab js
	tableau.push(fruit);
	console.log(tableau);
	let tr = getLigne(fruit);
	// on ajouter un enfant tr a <tbody>
	document.getElementById('myTable').appendChild(tr);

}