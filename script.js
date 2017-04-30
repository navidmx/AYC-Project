let name = 'Anonymous';
let value = 50;
let color = '#000000';

$(document).ready(function(){
    $('#rangeInput').change(function() {
        let cVal = $('#rangeInput').val();
        
        if (cVal < 20) { color = '#0000ff'; } //left
        else if (cVal < 40) { color = '#0000aa'; }//left-center
        else if (cVal < 60) { color = '#000000'; } //center
        else if (cVal < 80) { color = '#aa0000'; } //right-center
        else if (cVal <= 100) { color = '#ff0000'; } //right

        $('#nameInput').css('color', color);
    });

    $('#submitInput').click(function() {
        name = ($('#nameInput').val() == '') ? 'Anonymous' : $('#nameInput').val();
        value = $('#rangeInput').val();
        $('#signIn').hide();
        $('#sendMessage').show();
        console.log(name + ' ' + value);
    });

    $('#messageButton').click(function() {
        let message = $('#messageInput').val();
        $('#messages').append('<div class="message"><p class="name" style="color: '+color+'">'+name+'</p><p class="content">'+message+'</p></div>');
        $('#messageInput').val('');
    });
});