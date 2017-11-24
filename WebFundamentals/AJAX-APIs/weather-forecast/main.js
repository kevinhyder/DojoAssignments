$(document).ready(function () {
    $('form').submit(function() {
        var rqst = $('#srch-fld').val();
        var addy = 'http://api.openweathermap.org/data/2.5/weather?q=' + rqst + '&units=imperial&appid=6ad9369b17a9eb46453fe8ae4319d12e'
        $.get(addy, function(res) {
            $('#city').html(res.name);
            $('#info').html('Temperature: ' + res.main.temp + '℉');
        }, 'json');
    return false;
    });
});