// Show Nav Bar
$(document).ready(function(){
    $(window).scroll(function () { 
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        }
        else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    //slide up script
    $(".scroll-up-btn").click(function() {
        $("html").animate({scrollTop: 0});
    });


    // SHow Nav Bar in small Devices
    $(".navbar .menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        // Change between x and bar
        $(".navbar .menu-btn i").toggleClass("active");
    });

    //active link
    let activeLink = document.querySelectorAll(".menu li a")
    activeLink.forEach(link => {
        link.addEventListener("click",(e) => {
            activeLink.forEach(link => {
                link.classList.remove("link-active");
            })
            e.target.classList.add("link-active");
        })
    })

    //Typed
    var typed = new Typed(".typing",{
        strings: ["Developer","Freelancer","Designer","Blogger","Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Developer","Freelancer","Designer","Blogger","Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carsoul script
    $(".carousel").owlCarousel({
        margin : 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });    
});


