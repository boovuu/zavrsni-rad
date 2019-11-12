function lotogen(){
    var loto = new Array(7);

for (let i=0; i<loto.length; i++){
	let pick = Math.ceil(Math.random()*39);
	loto[i] = pick;
	for(let j = 0; j < i; j++)
	{
		if(loto[j] == loto[i])
		 {
			i=i-1;
		}
}}
document.getElementById("numbers").innerHTML = loto.join(" - ");
}
