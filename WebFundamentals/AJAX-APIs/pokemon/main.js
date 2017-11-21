$(document).ready(function(){
    var html = "";   
    for(var i = 1; i <= 151; i++) {
        html += '<img src="http://pokeapi.co/media/img/' + i + '.png">'
    }
    $('#poke-images').append(html);
})