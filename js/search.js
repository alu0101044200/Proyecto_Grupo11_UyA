function buscarTxt(texto)
{ if(!document.all) return
var contenido = document.body.createTextRange();
var seguir = true;
var temporal = contenido.duplicate();
var existe = temporal.findText(texto,0,0)
while(existe && seguir)
{
temporal.scrollIntoView(true)
temporal.select();
//Modifica contenido para que comience al final
//de la palabra encontrada
contenido.setEndPoint("StartToEnd", temporal);
seguir = confirm("¿Continuar la búsqueda?")
if (seguir)
{
//Repite labúsqueda
temporal = contenido.duplicate();
existe = temporal.findText(texto,0,0)
}
}
if (seguir)
alert("Fin del documento")
}  


