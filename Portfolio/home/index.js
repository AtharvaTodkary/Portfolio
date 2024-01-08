$(".card1").mouseenter(function (){
    $(this).animate({height:"57vh",width:"24%","margin-top":"-1vh"})
    .css({border:"2px solid #0ef"})
    .find("i").animate({"font-size":"40px"})
    .end().find("h3").animate({"font-size":"22px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"9vh",width:"19vh","box-shadow":"3px 3px 30px #oef","font-size":"15px"});
});

$(".card1").mouseleave(function (){
    $(this).animate({height:"55vh",width:"23%","margin-top":"0vh"})
    .css({border:"0px solid #0ef"})
    .find("i").animate({"font-size":"35px"})
    .end().find("h3").animate({"font-size":"20px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"7vh",width:"17vh","box-shadow":"2px 2px 20px #oef","font-size":"13px"});
});

// ----------------------------------------------------------------------

$(".card2").mouseenter(function (){
    $(this).animate({height:"57vh",width:"24%","margin-top":"-1vh"})
    .css({border:"2px solid #0ef"})
    .find("i").animate({"font-size":"40px"})
    .end().find("h3").animate({"font-size":"22px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"9vh",width:"19vh","box-shadow":"3px 3px 30px #oef","font-size":"15px"});
});

$(".card2").mouseleave(function (){
    $(this).animate({height:"55vh",width:"23%","margin-top":"0vh"})
    .css({border:"0px solid #0ef"})
    .find("i").animate({"font-size":"35px"})
    .end().find("h3").animate({"font-size":"20px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"7vh",width:"17vh","box-shadow":"2px 2px 20px #oef","font-size":"13px"});
});

// -----------------------------------------------------------------------

$(".card3").mouseenter(function (){
    $(this).animate({height:"57vh",width:"24%","margin-top":"-1vh"})
    .css({border:"2px solid #0ef"})
    .find("i").animate({"font-size":"40px"})
    .end().find("h3").animate({"font-size":"22px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"9vh",width:"19vh","box-shadow":"3px 3px 30px #oef","font-size":"15px"});
});

$(".card3").mouseleave(function (){
    $(this).animate({height:"55vh",width:"23%","margin-top":"0vh"})
    .css({border:"0px solid #0ef"})
    .find("i").animate({"font-size":"35px"})
    .end().find("h3").animate({"font-size":"20px"})
    .end().find("p").animate({"font-size":"16px"})
    .end().find("button").animate({height:"7vh",width:"17vh","box-shadow":"2px 2px 20px #oef","font-size":"13px"});
});

// ----------------------------------------------------------------------------------

$("#p1,#p2,#p3").mouseenter(function(){
    $(`#pl${this.id.slice(1)}`).show().css({border:"2px solid #0ef"});
});

$("#p1,#p2,#p3").mouseleave(function(){
    $(`#pl${this.id.slice(1)}`).hide();
});






