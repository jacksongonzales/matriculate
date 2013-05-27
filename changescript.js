var msgArr = ["GOODBYE", "BOYHOOD", "GOODBYE", "PICAYUNE WORRIES", "GOODBYE", "TELEVISION DINNERS", "GOODBYE", "TEPID PERSONALITIES", "GOODBYE", "PAIN", "GOODBYE", "TEARS, EMASCULATION", "FINGERNAIL CLIPPINGS", "ADOLESCENT WELTSCHMERZ", "C'EST LA GUERRE, LADS", "HELLO,", "HELLO!", "ALFRESCO!", "UNIVERSITY", "HELLO", "DEBT", "HELLO", "SENTIMENTAL ABLATIVES", "HELLO", "BEAUTIFUL DEBUTANTES"]
//var msg = $('h1').replaceWith('<h1>' + msgArr[i] + '</h1>'); 

$(function() {
 
    $('h1').click(function() {  
        var uno = msgArr[0];
        $(this).replaceWith('<h1>' + uno + '</h1>');
        center();
        var i = 0;
        setInterval(function() {
            var art = msgArr[i++];
            $('h1').replaceWith('<h1>' + art + '</h1>');
            if(i >= msgArr.length) i = 0;
            center();
        }, 1500); 
    });

/* Random Color Getter **/
$('h1').click(function() {
    setInterval(function() {
        $('body').css('background-color', get_random_color());
    }, 1000);
});

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
        if (color === '#000000') {
            return '#FF0000';
            console.log('uh oh');
        }
    }
    return color;
}

/* Centerer **/
var center = function(){

    $('#word').css({
        position:'absolute',
        left: ($(window).width() - $('#word').outerWidth())/2,
        top: ($(window).height() - $('#word').outerHeight())/2
    });
}
// To initially run the function:
$(window).resize(function(){center()});
center();


/* For audio controls **/
  $('audio').hide();
  $('#song').mouseenter(function(){
    $('audio').fadeIn(750).show();
  });
  $('#song').mouseleave(function(){
    $('audio').fadeOut(750);
  });
});
