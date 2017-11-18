$(document).ready(function() {
    $('#hide').click(function() { 
        $('#hide-p').hide(); 
    });
    $('#show').click(function() { 
        $('#hide-p').show();
    });
    $('#toggle').click(function() {
        $('#toggle-p').toggle();
    });
    $('#slide-down').click(function() { 
        $('#slide-down-p').slideDown();
    });
    $('#slide-up').click(function() { 
        $('#slide-down-p').slideUp();
    });
    $('#slide-toggle').click(function() { 
        $('#slide-toggle-p').slideToggle();   
    });
    $('#fade-in').click(function() { 
        $('#fade-in-p').fadeIn(1000);        
    });
    $('#fade-out').click(function() { 
        $('#fade-in-p').fadeOut(1000);
    });
    $('#add-class').click(function() { 
        $('#add-class-p').addClass('yellow');
    });
    $('#before').click(function() { 
            $('#before-p').before('<p class=red>Much better!<p>');
    });
    $('#after').click(function() { 
        $('#after-p').after('<p class=red>Yep, it adds another paragraph!</p>');
    });
    $('#append').click(function() { 
        $('#append-p').append('to the end of each element in the set of matched elements.');   
    });
    $('#html').click(function() { 
        $('#html-desc').html('<p>Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.</p>');
    });
    $('#attr').click(function() { 
        alert($('#attr-p').attr('id'));
    });
    $('#val').click(function() { 
        alert($('#val-input').val());  
    });
    $('#text').click(function() { 
        $('#text-p').text('Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.');   
    });

    $('#data-p').data('color', 'pomegranate');

    $('#data').click(function() { 
        alert($('#data-p').data('color')); 
    });
});
