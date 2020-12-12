"use strict";

// Sectie Persoonlijke Gegevens
let voornaamTekst;
let achternaamTekst;
let bedrijfTekst;
let btwTekst;
let straatTekst;
let huisnrTekst;
let postcodeTekst;
let plaatsTekst;
let landTekst;
let telefoonTekst;
let emailTekst;

// Sectie Boekingsvoorkeuren
let aankomstTekst;
let vertrekTekst;
let kamersoortTekst;
let aantalpersTekst;
let aantalkindTekst;

// Sectie Extra Info
let extrainfoTekst;

// Sectie Voorwaarden
let checkboxTekst;

// Variabele die gecheckt wordt of het formulier verstuurd mag worden
let verzendKlaar;

// VALIDATIE Persoonlijke Gegevens

function controleer_voornaam() {
	if (voornaamTekst.length < 2) {
		document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
		verzendKlaar = false;
	} else {
		document.getElementById("voornaam_error").innerHTML = "";
	}
}

function controleer_achternaam() {
	if (achternaamTekst.length < 2) {
		document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
		verzendKlaar = false;
	} else {
		document.getElementById("achternaam_error").innerHTML = "";
	}
}

function controleer_straat() {
	if (straatTekst.length < 6) {
		document.getElementById("straatnaam_error").innerHTML = "Voer een geldige straatnaam in!";
		verzendKlaar = false;
	} else {
		document.getElementById("straatnaam_error").innerHTML = "";
	}
}

function controleer_huisnummer() {
	if (huisnrTekst.search(/^\d/) == -1) {
		document.getElementById("huisnummer_error").innerHTML = "Minstens 1 Cijfer";
		verzendKlaar = false;
	} else {
		document.getElementById("huisnummer_error").innerHTML = "";
	}
}

function controleer_postcode() {
	if (postcodeTekst.search(/^[1-9]\d{3}$/) == -1) {
		document.getElementById("postcode_error").innerHTML = "Foutieve Postcode!";
		verzendKlaar = false;
	} else {
		document.getElementById("postcode_error").innerHTML = "";
	}
}

function controleer_plaats() {
	if (plaatsTekst.length < 2) {
		document.getElementById("plaatsnaam_error").innerHTML = "Minstens 2 karakters lang!";
		verzendKlaar = false;
	} else {
		document.getElementById("plaatsnaam_error").innerHTML = "";
	}
}

function controleer_telefoon() {
	let regExp = /[0][1-9]{2,3}[ /]?[0-9]{2}[ /]?[0-9]{2}[ /]?[0-9]{2}/;
	if (regExp.test(telefoonTekst) == false) {
		document.getElementById("telefoon_error").innerHTML = "Geef een correct Tel/GSM nummer in.";
		verzendKlaar = false;
	} else {
		document.getElementById("telefoon_error").innerHTML = "";
	}
}

function controleer_email() {
	let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
	if (regExp.test(emailTekst) == false) {
		document.getElementById("email_error").innerHTML = "Het emailadres dat u ingaf is niet correct!";
		verzendKlaar = false;
	} else {
		document.getElementById("email_error").innerHTML = "";
	}
}

function controleer_aankomst() {
	let ingevoerdeAankomstDatum = aankomstTekst;
	let huidigeDatum = new Date();
	ingevoerdeAankomstDatum = new Date(ingevoerdeAankomstDatum);

	if (ingevoerdeAankomstDatum < huidigeDatum) {
		document.getElementById("aankomstDatum_error").innerHTML = "Voer een geldige datum in.";
		verzendKlaar = false;
	} else {
		document.getElementById("aankomstDatum_error").innerHTML = "";
	}
}

function controleer_vertrek() {
	let ingevoerdeVertrekDatum = vertrekTekst;
	let huidigeDatum = new Date();
	ingevoerdeVertrekDatum = new Date(ingevoerdeVertrekDatum);

	if (ingevoerdeVertrekDatum < huidigeDatum) {
		document.getElementById("vertrekDatum_error").innerHTML = "Voer een geldige datum in.";
		verzendKlaar = false;
	} else {
		document.getElementById("voornaam_error").innerHTML = "";
	}
}

function controleer_aantalpersonen() {
	if (aantalpersTekst.search(/^\d/) == -1) {
		document.getElementById("aantalPersonen_error").innerHTML = "Minstens 1 Cijfer";
		verzendKlaar = false;
	} else {
		document.getElementById("aantalPersonen_error").innerHTML = "";
	}
}

// Versturen van het boekingsformulier

function verstuur_boeking() {
	voornaamTekst = document.getElementById("voornaam").value;
	achternaamTekst = document.getElementById("achternaam").value;
	bedrijfTekst = document.getElementById("bedrijf").value;
	btwTekst = document.getElementById("btw").value;
	straatTekst = document.getElementById("straatnaam").value;
	huisnrTekst = document.getElementById("huisnummer").value;
	postcodeTekst = document.getElementById("postcode").value;
	plaatsTekst = document.getElementById("plaatsnaam").value;
	landTekst = document.getElementById("land").value;
	telefoonTekst = document.getElementById("telefoon").value;
	emailTekst = document.getElementById("email").value;

	// Sectie Boekingsvoorkeuren

	aankomstTekst = document.getElementById("aankomstDatum").value;
	vertrekTekst = document.getElementById("vertrekDatum").value;
	kamersoortTekst = document.getElementById("soortKamer").value;
	aantalpersTekst = document.getElementById("aantalPersonen").value;
	aantalkindTekst = document.getElementById("aantalKinderen").value;

	// Sectie Extra Info

	extrainfoTekst = document.getElementById("extraInfo").value;

	// Verzendklaar of niet?

	verzendKlaar = true;

	// Check alle values

	// Kijken of value van VOORNAAM niet leeg is
	if (voornaamTekst.length == 0) {
		document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_voornaam();
	}

	// Kijken of value van ACHTERNAAM niet leeg is
	if (achternaamTekst.length == 0) {
		document.getElementById("achternaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_achternaam();
	}

	// Kijken of value van STRAAT niet leeg is
	if (straatTekst.length == 0) {
		document.getElementById("straatnaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_straat();
	}

	// Kijken of value van HUISNUMMER niet leeg is
	if (huisnrTekst.length == 0) {
		document.getElementById("huisnummer_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_huisnummer();
	}

	// Kijken of value van POSTCODE niet leeg is
	if (postcodeTekst.length == 0) {
		document.getElementById("postcode_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_postcode();
	}

	// Kijken of value van PLAATS niet leeg is
	if (plaatsTekst.length == 0) {
		document.getElementById("plaatsnaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_plaats();
	}

	// Kijken of value van TELEFOON niet leeg is
	if (telefoonTekst.length == 0) {
		document.getElementById("telefoon_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_telefoon();
	}

	// Kijken of value van EMAIL niet leeg is
	if (emailTekst.length == 0) {
		document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_email();
	}

	// Kijken of value van AANKOMSTDATUM niet leeg is
	if (aankomstTekst.length == 0) {
		document.getElementById("aankomstDatum_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_aankomst();
	}

	// Kijken of value van VERTREKDATUM niet leeg is
	if (vertrekTekst.length == 0) {
		document.getElementById("vertrekDatum_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_vertrek();
	}

	// Kijken of value van AANTAL PERSONEN niet leeg is
	if (aantalpersTekst.length == 0) {
		document.getElementById("aantalPersonen_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_aantalpersonen();
	}

	// Kijken of de voorwaarden geaccepteerd zijn

	if (document.getElementById("voorwaardenAkkoord").checked == false) {
		document.getElementById("voorwaardenAkkoord_error").innerHTML = "U bent niet akkoord gegaan met de voorwaarden";
		verzendKlaar = false;
	} else {
		document.getElementById("voorwaardenAkkoord_error").innerHTML = "";
	}

	// Check of alles juist ingevuld is

	if (verzendKlaar == true) {
		let link =
			"mailto:" +
			encodeURIComponent("info@j&k;") +
			encodeURIComponent(document.getElementById("email").value) +
			"?cc=" +
			encodeURIComponent("copy@j&k.be;") +
			"&subject=" +
			encodeURIComponent("BoekingsFormulier") +
			"&body=" +
			"Voornaam: " +
			encodeURIComponent(document.getElementById("voornaam").value) +
			encodeURIComponent("\r\n\n") +
			"Achternaam: " +
			encodeURIComponent(document.getElementById("achternaam").value) +
			encodeURIComponent("\r\n\n") +
			"Bedrijf: " +
			encodeURIComponent(document.getElementById("bedrijf").value) +
			encodeURIComponent("\r\n\n") +
			"BTW Nummer: " +
			encodeURIComponent(document.getElementById("btw").value) +
			encodeURIComponent("\r\n\n") +
			"Straat: " +
			encodeURIComponent(document.getElementById("straatnaam").value) +
			encodeURIComponent("\r\n\n") +
			"Huis Nr: " +
			encodeURIComponent(document.getElementById("huisnummer").value) +
			encodeURIComponent("\r\n\n") +
			"Postcode: " +
			encodeURIComponent(document.getElementById("postcode").value) +
			encodeURIComponent("\r\n\n") +
			"Plaats: " +
			encodeURIComponent(document.getElementById("plaatsnaam").value) +
			encodeURIComponent("\r\n\n") +
			"Land: " +
			encodeURIComponent(document.getElementById("land").value) +
			encodeURIComponent("\r\n\n") +
			"Tel/GSM Nr: " +
			encodeURIComponent(document.getElementById("telefoon").value) +
			encodeURIComponent("\r\n\n") +
			"Email: " +
			encodeURIComponent(document.getElementById("email").value) +
			encodeURIComponent("\r\n\n") +
			"Aankomstdatum: " +
			encodeURIComponent(document.getElementById("aankomstDatum").value) +
			encodeURIComponent("\r\n\n") +
			"Vertrekdatum: " +
			encodeURIComponent(document.getElementById("vertrekDatum").value) +
			encodeURIComponent("\r\n\n") +
			"Kamer soort: " +
			encodeURIComponent(document.getElementById("soortKamer").value) +
			encodeURIComponent("\r\n\n") +
			"Aantal personen: " +
			encodeURIComponent(document.getElementById("aantalPersonen").value) +
			encodeURIComponent("\r\n\n") +
			"Aantal kinderen: " +
			encodeURIComponent(document.getElementById("aantalKinderen").value) +
			encodeURIComponent("\r\n\n") +
			"Extra info: " +
			encodeURIComponent(document.getElementById("extraInfo").value);

		window.location.href = link;
	}
}

// Versturen van het contactformulier

function verstuur_contact() {
	voornaamTekst = document.getElementById("voornaam").value;
	achternaamTekst = document.getElementById("achternaam").value;
	telefoonTekst = document.getElementById("telefoon").value;
	emailTekst = document.getElementById("email").value;

	// Sectie Extra Info

	extrainfoTekst = document.getElementById("extraInfo").value;

	// Verzendklaar of niet?

	verzendKlaar = true;

	// Check alle values

	// Kijken of value van VOORNAAM niet leeg is
	if (voornaamTekst.length == 0) {
		document.getElementById("voornaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_voornaam();
	}

	// Kijken of value van ACHTERNAAM niet leeg is
	if (achternaamTekst.length == 0) {
		document.getElementById("achternaam_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_achternaam();
	}

	// Kijken of value van TELEFOON niet leeg is
	if (telefoonTekst.length == 0) {
		document.getElementById("telefoon_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_telefoon();
	}

	// Kijken of value van EMAIL niet leeg is
	if (emailTekst.length == 0) {
		document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
		verzendKlaar = false;
	} else {
		controleer_email();
	}

	// Kijken of de voorwaarden geaccepteerd zijn

	if (document.getElementById("voorwaardenAkkoord").checked == false) {
		document.getElementById("voorwaardenAkkoord_error").innerHTML = "U bent niet akkoord gegaan met de voorwaarden";
		verzendKlaar = false;
	} else {
		document.getElementById("voorwaardenAkkoord_error").innerHTML = "";
	}

	// Check of alles juist ingevuld is

	if (verzendKlaar == true) {
		let link =
			"mailto:" +
			encodeURIComponent("info@j&k;") +
			encodeURIComponent(document.getElementById("email").value) +
			"?cc=" +
			encodeURIComponent("copy@j&k.be;") +
			"&subject=" +
			encodeURIComponent("BoekingsFormulier") +
			"&body=" +
			"Voornaam: " +
			encodeURIComponent(document.getElementById("voornaam").value) +
			encodeURIComponent("\r\n\n") +
			"Achternaam: " +
			encodeURIComponent(document.getElementById("achternaam").value) +
			encodeURIComponent("\r\n\n") +
			"Tel/GSM Nr: " +
			encodeURIComponent(document.getElementById("telefoon").value) +
			encodeURIComponent("\r\n\n") +
			"Email: " +
			encodeURIComponent(document.getElementById("email").value) +
			encodeURIComponent("\r\n\n") +
			"Extra info: " +
			encodeURIComponent(document.getElementById("extraInfo").value);

		window.location.href = link;
	}
}
