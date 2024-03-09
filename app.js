// 1
$(function() {
    console.log('Let’s get ready to party with jQuery!');
});

// 2
$('article img').addClass('image-center');

// 3
const $LastP = $('p').eq(5);
$LastP.remove();

//4 
const $Title = $('#title');
$Title.css('font-size', Math.random() * 100);

//5 
$('ol').append('<li>I am still confused though!</li>');

//6
$('#bad').empty();
$('#bad').append('<p>My apologies, the idea of list was silly :(</p>');

//7
$('.form-control').on('keyup blur change', function() {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
});


//8 
$('img').on('click', function(e) {
    $(e.target).remove();
});