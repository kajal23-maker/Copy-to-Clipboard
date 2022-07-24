$(document).ready(function () {
    var text = '';
    $('#copy-btn').click(function () {
        $('#text').select();
        document.execCommand("copy");
        text = $('#text').val();
    });

    $('#paste-btn').click(function () {
        $('#text1').val(text);
    });

    $('#clear-btn').click(function () {
        $('#text1').val('');
    });

    $('#justify-btn').click(function () {
        $('#text1').css('text-align', 'justify');
        $('#text').css('text-align', 'justify');
    });
});