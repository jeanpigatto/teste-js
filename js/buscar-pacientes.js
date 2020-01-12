
var botaobuscar = document.querySelector("#buscar-paciente");

botaobuscar.addEventListener("click", function (event){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
      var spanErro = document.querySelector("#erro-ajax");
      if (xhr.status == 200){
        spanErro.classList.add("invisivel").add();

        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function (pac) {
          adicionaPacienteNaTabela(pac);
        });

      }else {
        spanErro.innerHTML = "Erro ao buscar pacientes";
        spanErro.classList.remove("invisivel");
      }
    });
    xhr.send();

});
