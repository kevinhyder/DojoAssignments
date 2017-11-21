$(document).ready(function(){
    $(document).on('click', '.btn', function(){
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var fullName = firstName + ' ' + lastName;
        var clickForDesc = '<p>' + 'Click for Description!' + '</p>'
        
        $('#right-side').append('<div class="contact-card">' + '<h1>' + fullName + '</h1>' + clickForDesc + '</div>');
        return false;
    });

    $(document).on('click', '.contact-card', function(){
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var name = '<h1>' + firstName + ' ' + lastName + '</h1>';
        var clickForDesc = '<p>' + 'Click for Description!' + '</p>';
        var desc = $('#desc-ta').val();

        if ($(this).html() == name + clickForDesc) 
        { 
        $(this).html(desc); 
        } 
        else 
        { 
        $(this).html( name + clickForDesc ); 
        };
    
    });
})