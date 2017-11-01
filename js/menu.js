$(document).ready(function(){
	//shows menu
 $('.navbar-toggle').on("click", function(e){
    $('#navbar-main').toggle();
     e.stopPropagation();
     e.preventDefault();
  });  
   //dismiss menu
 $('.container').on("click", function(e){
	if ($("#navbar-main").css("display") == "block"){
		$('#navbar-main').toggle();
	}
    // e.stopPropagation();
    //  e.preventDefault();
  }); 
  
   $('.btnImportar').on("click", function(e){
    $('#listar').hide();
	$('#limpar').hide();
  $('#importar').show();
  e.preventDefault();
  });  
  $('.btnLimpar').on("click", function(e){
    $('#listar').hide();
	$('#importar').hide();
  $('#limpar').show();  
  e.preventDefault();
  });  
   $('.btnHome').on("click", function(e){
    $('#listar').show();
	$('#importar').hide();
	$('#limpar').hide();
  });  
  
});