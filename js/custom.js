

$(document).ready(function(){
    $('.menu-ico-g').click(function(){
        $('.page-wrapper').toggleClass('hide');
    });

    $('.menu-ico-g').click(function(){
        if($(this).hasClass('mb-ic')) {
         $(this).removeClass('mb-ic');
        }
        else{
            $(this).addClass('mb-ic');
        }
        
     });

     $('.menus-g ').click(function(){
        $(this).toggleClass('close');
        $(this).parent().find('.sub-menu').slideToggle('slow');
    });

    $('#select-all').change(function(){
        if($(this).prop('checked')){
            $('.c-cus').prop('checked' ,true)
        }
        else{
            $('.c-cus').prop('checked' ,false)
        }
    });

    $('.c-cus').change(function(){
        var count = 0 ;
        for(var i=0 ; i < $('.c-cus').length ; i++){
            if($('.c-cus:eq('+i+')').prop('checked')== true){
                count++;
            }
            if(count==$('.c-cus').length){
                $('#select-all').prop('checked',true);
            }
            else{
                $('#select-all').prop('checked',false);
            }
        }

    });



});



