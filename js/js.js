window.onload=minus_opacity();

var btnPopup=$('.btn-popup');

$('form').on('submit',function(e){
    e.preventDefault();
});

btnPopup.on('click', function(){
   $('.hidden').toggle();
});

$('.minus').on('click',function(){
    if(this.nextSibling.nextSibling.firstChild.nodeValue!=0)
        --this.nextSibling.nextSibling.firstChild.nodeValue;
    minus_opacity();

});

$('.plus').on('click',function(){
    ++this.previousSibling.previousSibling.firstChild.nodeValue;
    minus_opacity();

});

function minus_opacity(){
    $('.sign-number').each(function(i,elem){
       if($(elem).text()<1)
           $(elem.previousSibling.previousSibling).css('opacity','0.5');
       else
           $(elem.previousSibling.previousSibling).css('opacity','1');
    });
}

