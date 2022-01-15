$(document).ready(function () {
    // This is going to save to the local storage
    $('.saveBtn').on('click', function() {
        var v = $(this).siblings('.write').val();
        var t = $(this).parent().attr('id');
        localStorage.setItem(t, v);
    });
    // This will append the present day to the Jumbotron
    $('#currentDay').text(moment().format('MMMM Do YYYY'));

    var present = new Date();
    var now = present.getHours();
    console.log('The time at present is', now);

    // This is going to change our planner colours as the day progresses. 

    function planUpdate() {
        var now = present.getHours();
        $('.time').each(function () {
           var theSection = parseInt($(this).attr('id').split('-')[1]);
           if (theSection < now) {
               $(this).addClass('past');
           } else if (theSection === now) {
               $(this).removeClass('past').addClass('present');
           } else {
               $(this).removeClass('past', 'present').addClass('future');
           }
        });
    }
    planUpdate();
});