let dark = false;
$(document).ready(function () {
    $(".slider").click(function (e) {
        $("body").toggleClass("dark");
    });
    $("#issues").click(function(e){
        $(".tooltip-con").fadeToggle();
    });
    $(".menu").click(function(){
        $(".nav-links .list").fadeToggle();
    });
    window.addEventListener('resize',function(){
        const navs = this.document.querySelectorAll(".nav-links .list");
        let width = this.window.innerWidth;
        if(width >= 1200){
            for(let i =0;i<navs.length;i++){
                navs[i].style.display = "inline";
            }
        }else{
            for(let i =0;i<navs.length;i++){
                navs[i].removeAttribute("style");
            }
        }     
    });
});
