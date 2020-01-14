
// var titulo = document.querySelector("h1");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema de Nutrição (alterado via js)";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");
	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	if (!pesoEhValido) {
		pesoEhValido = false;
		tdImc.textContent = "peso inválido";

		//paciente.style.backgroundColor = "lightcoral";
		// uma boa prátia é sempre usar css para cores
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValido) {
		alturaEhValido = false;
		tdImc.textContent = "altura inválido";
		paciente.classList.add("paciente-invalido");
	}

	// se os dois são válidos
	if (alturaEhValido && pesoEhValido) {
		tdImc.textContent = calculaIMC(peso, altura);
	}
}

function calculaIMC(peso, altura) {
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if (peso >= 0 && peso <= 600)
		return true;
	else
		return false;
}

function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}
