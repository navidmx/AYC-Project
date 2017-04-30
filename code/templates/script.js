var name = 'Anonymous';
var value = 50;
var color = '#000000';

function signIn(){
    name = ($('#nameInput').val() == '') ? 'Anonymous' : $('#nameInput').val();
    value = $('#rangeInput').val();
    $('#signIn').hide();
    $('#sendMessage').show();
    console.log(name + ' ' + value);
}

$(document).ready(function(){
    $('#rangeInput').change(function() {
        var cVal = $('#rangeInput').val();

        if (cVal < 20) { color = '#0000ff'; } //left
        else if (cVal < 40) { color = '#0000aa'; }//left-center
        else if (cVal < 60) { color = '#000000'; } //center
        else if (cVal < 80) { color = '#aa0000'; } //right-center
        else if (cVal <= 100) { color = '#ff0000'; } //right

        $('#nameInput').css('color', color);
    });
});