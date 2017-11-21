$(document).ready(function () {
    
    $('img').click(function() { 
        var currSrc = $(this).attr('src');
        var altSrc = $(this).attr('data-alt-src')
        $(this).attr('data-alt-src', currSrc);
        $(this).attr('src', altSrc);
    });
});