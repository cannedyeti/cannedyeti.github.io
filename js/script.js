$(function(){
    $(".page").on("click", function() {
        if($("resume").css("display", "block")) {
            $(".resume").hide();
        }
    })
    $(".view").on("click", function(){
        $(".resume").css("display", "block");
    })
    $(".close").on("click", function(){
        $(".resume").hide();
    })

    $(".view").click(function(event) {
	    event.stopPropagation();
    });

    $('li').click(function(){
        console.log($(this))
        if($(this).hasClass('typeAni'))
                setTimeout(function(){
                    Typed.new('.typed', {
                    strings: ["Hi! I'm Connor.", "But you can call me Con Job.", "I code cool shit.", "Are you fucking sick of this yet?", "ARE YOU?"],
                    typeSpeed: 70
                    });
                }, 2000)
        Typed.new('.typed', {
                    strings: [""],
                    typeSpeed: 70
        });
    })
// VIDEO PLAY
var video = $("#video");
var video2 = $("#video2");
var video3 = $("#video3");

$(video).on('canplay', function(){
        $(video).mouseenter(function(){
            $(this).get(0).play();
        }).mouseleave(function(){
            $(this).get(0).pause();
        })
    });
$(video2).on('canplay', function(){
        $(video2).mouseenter(function(){
            $(this).get(0).play();
        }).mouseleave(function(){
            $(this).get(0).pause();
        })
    });

$(video3).on('canplay', function(){
        $(video3).mouseenter(function(){
            $(this).get(0).play();
        }).mouseleave(function(){
            $(this).get(0).pause();
        })
    });
});


