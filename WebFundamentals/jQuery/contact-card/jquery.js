$(document).ready(function(){
    $(document).on('click', '.btn', function(){
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var fullName = firstName + ' ' + lastName;
        var clickForDesc = '<p>Click for Description!</p>';
        var desc = $('#desc-ta').val();
        var person = {
            full_name: fullName,
            description: desc 
        };
        var personStr = JSON.stringify(person);
        $('#right-side').append('<div class="contact-card"' + ' data-person=' + "'" + personStr + "'" + '>' + '<h1>' + fullName + '</h1>' + clickForDesc + '</div>');
        return false;   
    });

    $(document).on('click', '.contact-card', function(){
        var person = $(this).data('person');
        var name = '<h1>' + person.full_name + '</h1>';
        var clickForDesc = '<p>Click for Description!</p>';
        var desc = person.description;

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