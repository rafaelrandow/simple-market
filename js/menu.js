$(document).ready(function(){
	//shows menu
 $('.navbar-toggle').on("click", function(e){
    $('#navbar-main').toggle();
  });  
  
   $('.btnImportar').on("click", function(e){
    $('#listar').hide();
	$('#limpar').hide();
	$('#importar').show();
  });  
  $('.btnLimpar').on("click", function(e){
    $('#listar').hide();
	$('#importar').hide();
	$('#limpar').show();
  });  
   $('.btnHome').on("click", function(e){
    $('#listar').show();
	$('#importar').hide();
	$('#limpar').hide();
  });  
  
});