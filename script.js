let name = 'Anonymous';
let value = 50;
let color = '#000000';
let messageN = 0;

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
        sendMessage(name, color, $('#messageInput').val());
        //Me: "What does everyone think about Trump's policy on the Middle East?"
        if (messageN === 0) {
            /*right-center*/ setTimeout(function() { sendMessage('Bob', '#0000aa', "Welcome "+name+". I think this is a complicated issue that people need to know about.") }, 2000);
            /*left-center*/ setTimeout(function() { sendMessage('Paul', '#aa0000', "I agree. Actually, I didn't realize the complexity of politics in the Middle East until I read some articles about it on PurpleNews.") }, 5000);
            messageN++;
        }
        //Me: "Yes, it's so important to know both sides of the argument."
        else if (messageN === 1) {
            /*center*/ setTimeout(function() { sendMessage('Fred', '#000000', "I agree.") }, 2000);
            /*right*/ setTimeout(function() { sendMessage('Tucker', '#ff0000', "Forget people knowing about issue. We need to take action now!") }, 4000);
            messageN++;
        }
        //Me: "But people need to be educated about global issues"
        else if (messageN == 2) {
            /*center*/ setTimeout(function() { sendMessage('Bob', '#0000aa', "I'm so glad that PurpleNews has brought together varying viewpoints on the news!") }, 2000);
            messageN++;
        }  
    });
});

function sendMessage(name, color, message) {
    $('#messages').append('<div class="message"><p class="name" style="color: '+color+'">'+name+'</p><p class="content">'+message+'</p></div>');
    $('#messageInput').val('');
}