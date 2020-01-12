

var filtro  = document.querySelector("#filtrar-tabela");
var pacientes  = document.querySelectorAll(".paciente");


filtro.addEventListener("input", function() {

  if (this.value.length > 0){

    pacientes.forEach(function(paciente) {
      var nomeTD = paciente.querySelector(".info-nome");
      var nome = nomeTD.textContent;
      var expressao = new RegExp(filtro.value);

      if (!expressao.test(nome))
        paciente.classList.add("invisivel");
      else
        paciente.classList.remove("invisivel");
    });
  }else {
    pacientes.forEach(function(paciente) {
      paciente.classList.remove("invisivel");
    });
  }
});
