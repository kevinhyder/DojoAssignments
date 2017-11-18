$(document).ready(function() {
    $('#click').click(function() { 
        alert('.click is bound to the button, and called this alert!') 
    });
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
});
