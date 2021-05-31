var valorSensor = msg.payload;

var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

if(dia <= 9)
    dia = "0" + dia;
    
if(mes <= 9)
    mes = "0" + mes;

var diaExecucao = dia + "/" + mes + "/" + ano;

var hora = data.getHours();
var minuto = data.getMinutes();
var segundo = data.getSeconds();

if(hora <= 9)
    hora = "0" + hora;
    
if(minuto <= 9)
    minuto = "0" + minuto;
    
if(segundo <= 9)
    segundo = "0" + segundo;

var horaExecucao = hora + ":" + minuto + ":" + segundo;

dados = {
    "Data Execução": diaExecucao,
    "Hora Execução": horaExecucao,
    "variable": "temperatura",
    "unit" : "oC",
    "value": valorSensor
}

msg.payload = JSON.stringify(dados);

return msg;