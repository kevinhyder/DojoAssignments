$(document).ready(function(){
    var html = "";   
    for(var i = 1; i <= 151; i++) {
        html += '<img src="https://pokeapi.co/media/sprites/pokemon/' + i + '.png"' + ' id=' + "'" + i + "'" + " class='pokemon'" + ">"  
    }
    $('#poke-images').append(html);

    $('.pokemon').on('click', function(){
        var pokeId = $(this).attr('id');
        var addy ='https://pokeapi.co/api/v2/pokemon/' + pokeId + '/';
        $.get(addy, function(res) {
            var htmlStr = ''
            var types = ''
            htmlStr += '<h1>' + res.name + '</h1>'
            htmlStr +='<img src=https://pokeapi.co/media/sprites/pokemon/' + pokeId + '.png>'
            for(var i = 0; i < res.types.length; i++) {
                types += '<li>' + res.types[i].type.name + '</li>'
            }
            htmlStr += '<h3>Types:</h3>' + '<ul>' + types + '</ul>'
            + '<h3>Height:</h3>' + res.height + '<h3>Weight:</h3>' + res.weight
            $('#poke-data').html(htmlStr);
        }, 'json')
        // $('#poke-data').html(htmlStr);
    })
})