$(function() {
let slideShow = $(".slide-show");
let slideCount = $(".single-slide").length;
let slideWidth = 100 /slideCount;
let index = 0;

// ustawic szerokość kontenera (dynamicznie)

slideShow.css("width", slideCount + "00%");

// ustawic szerokosc i lewy margines dla kazdego slajdu (dynamicznie)

slideShow.find(".single-slide").each(function(indexTablicy) {
    $(this).css({width: slideWidth + "%", marginLeft: indexTablicy * slideWidth + "%"});


// nawigacja - obsługa zdarzeń dla prawej i lewej strzałki

$(".prev-slide").click(function(){
    slide(index -1);
});

$(".next-slide").click(function(){
    slide(index + 1);
});

//  główna funkcja slidera
function slide(newSlideIndex) {
if (newSlideIndex < 0 || newSlideIndex > slideCount -1) {
    return;
    }

// chowamy napis na kolejnym slajdzie 
let slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
slideCaption.fadeOut();

let marginLeft = (newSlideIndex * (-100)) + "%";

slideShow.animate({marginLeft: marginLeft}, 700, function() {
    slideCaption.fadeIn();
    index = newSlideIndex;
})
}
})
});