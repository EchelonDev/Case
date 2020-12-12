let aankomstdate;
let vertrekdate;

aankomstdate = document.getElementById("aankomstDatum").value;
vertrekdate = document.getElementById("vertrekDatum").value;

console.log(vertrekdate);
console.log(aankomstdate);

function beschikbaarheid() {
	let number = Math.floor(Math.random() * 11);

	aankomstdate = document.getElementById("aankomstDatum").value;
	vertrekdate = document.getElementById("vertrekDatum").value;

	if (aankomstdate.length == 0 && vertrekdate.length == 0) {
		console.log("Geen waardes ingegeven");
	} else {
		if (number > 5) {
			alert("Alle kamers zijn bezet op deze data.");
		} else {
			alert("Er zijn nog verschillende kamers vrij op deze data.");
		}
	}
}
