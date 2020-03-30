function precarica( img ) {
    $( img ).each( function () {
        $( '<img/>' )[ 0 ].src = this;
    });
}
precarica([
    './images/Ward 1.png',
    './images/Ward 2.png',
    './images/Ward 3.png',
    './images/Ward 4.png',
    './images/Ward 5.png',
    './images/Ward 6.png',
    './images/Ward 7.png',
    './images/Ward 8.png',
    './images/Ward 9.png',
    './images/Ward 10.png',
    './images/Ward 11.png',
    './images/Ward 12.png'
]); 

jQuery(document).ready(function () {
    $('.Ward1').mouseout(function(){
        $("#map").attr('src', './images/Ward 1.png');
    }),
    $('.Ward1').mouseover( function(){
        $("#map").attr('src', './images/Ward 1.png');
    });
    $('.Ward2').mouseout(function(){
        $("#map").attr('src', './images/Ward 2.png');
    }),
    $('.Ward2').mouseover( function(){
        $("#map").attr('src', './images/Ward 2.png');
    });
    $('.Ward3').mouseout(function(){
        $("#map").attr('src', './images/Ward 3.png');
    }),
    $('.Ward3').mouseover( function(){
        $("#map").attr('src', './images/Ward 3.png');
    });	
    $('.Ward4').mouseout(function(){
        $("#map").attr('src', './images/Ward 4.png');
    }),
    $('.Ward4').mouseover( function(){
        $("#map").attr('src', './images/Ward 4.png');
    });
    $('.Ward5').mouseout(function(){
        $("#map").attr('src', './images/Ward 5.png');
    }),
    $('.Ward5').mouseover( function(){
        $("#map").attr('src', './images/Ward 5.png');
    }),
    $('.Ward6').mouseout(function(){
        $("#map").attr('src', './images/Ward 6.png');
    }),
    $('.Ward6').mouseover( function(){
        $("#map").attr('src', './images/Ward 6.png');
    });
    $('.Ward7').mouseout(function(){
        $("#map").attr('src', './images/Ward 7.png');
    }),
    $('.Ward7').mouseover( function(){
        $("#map").attr('src', './images/Ward 7.png');
    });
    $('.Ward8').mouseout(function(){
        $("#map").attr('src', './images/Ward 8.png');
    }),
    $('.Ward8').mouseover( function(){
        $("#map").attr('src', './images/Ward 8.png');
    });	
    $('.Ward9').mouseout(function(){
        $("#map").attr('src', './images/Ward 9.png');
        }),
    $('.Ward9').mouseover( function(){
        $("#map").attr('src', './images/Ward 9.png');
    });
    $('.Ward10').mouseout(function(){
        $("#map").attr('src', './images/Ward 10.png');
    }),
    $('.Ward10').mouseover( function(){
    $("#map").attr('src', './images/Ward 10.png');
    }),
    $('.Ward11').mouseout(function(){
        $("#map").attr('src', './images/Ward 11.png');
    }),
    $('.Ward11').mouseover( function(){
        $("#map").attr('src', './images/Ward 11.png');
    });
    $('.Ward12').mouseout(function(){
        $("#map").attr('src', './images/Ward 12.png');
    }),
    $('.Ward12').mouseover( function(){
    $("#map").attr('src', './images/Ward 12.png');
    });						
});					