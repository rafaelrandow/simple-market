 $( document ).ready(function() {
    $(".aba").click(function(){
        $("#show").show();
        $(".current").removeClass('current');    
        $(this).closest('a').addClass('current');      
        $("#show").fadeOut(400);
    });
    $("#show").fadeOut(400);
});

function flip(a) {

    $(a).toggleClass('flipper');

}
function conteudo(page){   

//$("#conteudo").load(page +".html");

$("#show").fadeOut(400);
}
function salvar(obj){
    
    var n = $(obj).parent().parent().find('#nome').text();
    var t = $(obj).parent().parent().find('#telefone').text();
//   // var id = $('#id').text();
//    var nome = $('#nome').text();            
//    var telefone = $('#telefone').text();
//    var contato = new Object();
//    //contato.id = $('#id').text();
//    contato.nome = $('#nome').text();
//    contato.telefone = $('#telefone').text();

     alert("Salvando " +n);
     localStorage.setItem(n,t);

}
function remover(obj){
    var n = $(obj).parent().parent().find('#nome').text();
    var t = $(obj).parent().parent().find('#telefone').text();
    alert("Removendo " +n);
    localStorage.removeItem(n,t);
    $(obj).parent().parent().fadeOut();
}

function gravar(){
    var nome, telefone;
    var textToWrite;
    var data = new Date().getTime();
	var prod = $('.list-group-item>b').length;
	
    
    alert("Exportando "+ (prod - 1) +" produtos");

    $('.list-group-item>b').each(function(){
        nome = $(this).text();
        //telefone = $(this).next().text();	        
        textToWrite += '{"nome":"'+nome+'","comprado":"nao"},\n';
    });
    textToWrite = textToWrite.replace("undefined","[\n");   
	textToWrite = textToWrite.replace(",\n{\"nome\":\"status\",\"comprado\":\"nao\"},","\n]");
    
    
    var textFileAsBlob = new Blob([textToWrite], {type:'text/json'});
	var fileNameToSaveAs = "produtos"+ data +".json";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Baixar arquivo";
	if (window.webkitURL != null)
	{
        // Para webkit
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Para o Firefox
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputTextToSave").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}