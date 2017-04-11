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

    // LINK ANIMATIONS

    $(".homeText").hide()
    $(".codeText").hide()
    $(".aboutText").hide()
    $(".resumeText").hide()

    $(".homeLink").on("mouseenter", function(){
        $('.homeIcon').hide();
        $('.homeText').show();
    });

    $(".homeLink").on("mouseleave", function(){
        $('.homeIcon').show();
        $('.homeText').hide();
    });

    $(".codeLink").on("mouseenter", function(){
        $('.codeIcon').hide();
        $('.codeText').show();
    });

    $(".codeLink").on("mouseleave", function(){
        $('.codeIcon').show();
        $('.codeText').hide();
    });


    $(".aboutLink").on("mouseenter", function(){
        $('.aboutIcon').hide();
        $('.aboutText').show();
    });

    $(".aboutLink").on("mouseleave", function(){
        $('.aboutIcon').show();
        $('.aboutText').hide();
    });

    $(".resumeLink").on("mouseenter", function(){
        $('.resumeIcon').hide();
        $('.resumeText').show();
    });

    $(".resumeLink").on("mouseleave", function(){
        $('.resumeIcon').show();
        $('.resumeText').hide();
    });


});
