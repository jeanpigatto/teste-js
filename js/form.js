
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){

	//função especial que previne o default
	//precisa do event com argumento
	event.preventDefault();

	var form  = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var erro = validaPaciente(paciente);
  if (erro.length > 0) {
		exibeMensagensErro(erro);
		return;
	}

  adicionaPacienteNaTabela(paciente);

  form.reset();
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
});


/*---- função usada aqui e também no buscar-pacientes, ao buscar do JSON ----*/
function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTR(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function montaTR(paciente){
  var linhaTr = document.createElement("tr");
  linhaTr.classList.add("paciente");

  linhaTr.appendChild(montaTD(paciente.nome, ".info-nome"));
  linhaTr.appendChild(montaTD(paciente.peso, ".info-peso"));
  linhaTr.appendChild(montaTD(paciente.altura, ".info-altura"));
  linhaTr.appendChild(montaTD(paciente.gordura, ".info-gordura"));
  linhaTr.appendChild(montaTD(paciente.imc, ".info-imc"));

  return linhaTr;
}

function montaTD(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

// pega os dados do form e retorna um objeto paciente
function obtemPacienteDoFormulario(form){
  var paciente = {
    nome:   form.nome.value,
    altura: form.altura.value,
    peso:   form.peso.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente(paciente){
	erros = [];
	if (!validaPeso(paciente.peso))
	  erros.push("Peso é inválido!");

	if (!validaAltura(paciente.altura))
	  erros.push("Altura é inválida!");

  if (paciente.nome.length == 0){
		erros.push("O nome do paciente precisa ser informado!");
	}

	if (paciente.gordura.length == 0){
		erros.push("A gordura do paciente precisa ser informado!");
	}

	if (paciente.altura.length == 0){
		erros.push("A altura do paciente precisa ser informado!");
	}

	if (paciente.peso.length == 0){
		erros.push("O peso do paciente precisa ser informado!");
	}
  return erros;
}

function exibeMensagensErro(erros){
	var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(itemErro){
		var li = document.createElement("li");
		li.textContent = itemErro;
		ul.appendChild(li);
	});


}
