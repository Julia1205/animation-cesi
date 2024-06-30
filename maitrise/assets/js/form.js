$( document ).ready(function() {
    $(".input").html("<input type='text' name='inpt'>")
    $('.button').html('<input type="button" value="valider">')
    $('.button').on('click', function(){
        $('.result').html($("input[type=text][name=inpt]").val())
    })
});