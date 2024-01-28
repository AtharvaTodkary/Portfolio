$("#p1,#p2,#p3").mouseenter(function(){
    $(`#pl${this.id.slice(1)}`).show().css({border:"2px solid #0ef"});
});

$("#p1,#p2,#p3").mouseleave(function(){
    $(`#pl${this.id.slice(1)}`).hide();
});

// -------------------------------------------------------------------------------------------------------------------------

var mq = window.matchMedia( "(max-width: 607px)" );

if (mq.matches) {
    $(".card1").mouseenter(function (){
        $(this).animate({height:"32vh",width:"76%","margin-top":"3vh"})
        .css({border:"2px solid #0ef"})
        .end().find("button")
        .animate({height:"5vh",width:"10vh","box-shadow":"3px 3px 30px #oef","font-size":"__px"});
    });

    $(".card1").mouseleave(function (){
        $(this).animate({height:"30vh",width:"75%","margin-top":"0vh"})
        .css({border:"0px solid #0ef"})
        .end().find("button")
        .animate({height:"4vh",width:"8vh","box-shadow":"2px 2px 20px #oef","font-size":"10px",margin:"4% 40%"});
    });
}
else{
    $(".card1").mouseenter(function (){
        $(this).animate({height:"57vh",width:"24%","margin-top":"-1vh"})
        .css({border:"2px solid #0ef"})
        .find("i").animate({"font-size":"40px"})
        .end().find("h3").animate({"font-size":"22px"})
        .end().find("p").animate({"font-size":"14px"})
        .end().find("button").animate({height:"9vh",width:"19vh","box-shadow":"3px 3px 30px #oef","font-size":"15px"});
    });

    $(".card1").mouseleave(function (){
        $(this).animate({height:"55vh",width:"23%","margin-top":"0vh"})
        .css({border:"0px solid #0ef"})
        .find("i").animate({"font-size":"35px"})
        .end().find("h3").animate({"font-size":"20px"})
        .end().find("p").animate({"font-size":"13px"})
        .end().find("button").animate({height:"7vh",width:"17vh","box-shadow":"2px 2px 20px #oef","font-size":"13px"});
    });
}

// -------------------------------------------------------------------------------------------------------------------------------

$("#menu").click(function(){
    $(".drop-down").css("display","block");
});

$("#downloadButton").click(function (){

    var fileURL = "/home/Resume/Atharva_Todkary_Resume.pdf";

    var link = $('<a>',{
        href : fileURL,
        download : 'Atharva_Todkary_Resume.pdf'
    });

    $('body').append('link');

    link[0].click();//link[0] is used here, in order to select first data in object link

    link.remove();
});

// -------------------------------------------------------------------------------------------------------------------------------
