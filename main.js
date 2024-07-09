//! Home Section

$(".openNav").on('click', function(){
    $("#leftMenu").animate({ width:'250px'},1000)
    $("#home-content").animate({marginLeft :'250px'},1000)
    $("#home span").animate({marginLeft :'250px'},1000)
})

$(".closebtn").on('click', function(){
    $("#leftMenu").animate({ width:'0px'},1000)
    $("#home-content").animate({marginLeft :'0px'},1000)
    $("#home span").animate({marginLeft :'0px'},1000)
})

//! Slider Down Section

$('.toggle').on('click', function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

//! Count Down Section

function countdown(endDate) {
    const targetDate = new Date(endDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeout(updateCountdown, 1000);
            $(".days").html(`${days} D`);
            $(".hours").html(`${hours} h`);
            $(".minutes").html(`${ minutes } m`);
            $('.seconds').html(`${ seconds} s`)
        } else {
            console.log('End Count');
        }
    }
    updateCountdown();
}
countdown('July 19, 2028 00:00:00');

//! Contact Us

let maxLength = 100;
$('textarea').on('keyup', function(){
    let length = $(this).val().length;
    let AmountLeft = maxLength-length;

    if(AmountLeft <= 0){
        $("#chars").text("your available character finished");       
    } else{       
        $("#chars").text(AmountLeft);
    }
})