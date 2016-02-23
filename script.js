$(document).ready(function(){
    $("a.pun").click(function(){
        var clase = $(this).attr('class');
        var res = clase.split(" ");
        $('.' +res[1]+'>i').removeClass("seleccionado");
        $('.' +res[1]).removeClass("seleccionado");
        var hijo = $(this).children();
        $(this).addClass("seleccionado");
        hijo.addClass("seleccionado");
    });
});