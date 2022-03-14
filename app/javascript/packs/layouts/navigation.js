$(document).on('turbolinks:load', function(){
    console.log("q")
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
    $(".message .close").delay(3000).slideUp(200, function() {
        $(this).closest('.message').transition('fade');
    });
})
