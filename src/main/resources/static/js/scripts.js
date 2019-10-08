$(document).ready(function(){
    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#viewport").toggleClass("menuDisplayed");
    });
});
