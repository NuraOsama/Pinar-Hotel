
(function ($) { 
    "use strict";
    $(document).ready(function () {
        $(".dropdown").on("hide.bs.dropdown", function () {
            $("._butt").html('English <span  <span class="fa fa-angle-down"></span>');
        });
        $(".dropdown").on("show.bs.dropdown", function () {
            $("._butt").html('English  <span class="fa fa-angle-up"></span>');
        });

        $(".clck_1").hover(function(){

            $("._butt").html('English <span  <span class="fa fa-angle-down"></span>');
       
        });

        $(".clck_2").hover(function(){

            $("._butt").html('Arabic <span  <span class="fa fa-angle-down"></span>');
       
        });

    });
    

     //dropdown menu
     $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    

      });

    //select One
    $('._selec_one').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
 
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    //select two
    $('._selec_two').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options_two '
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options_two ').hide();
            });
            $(this).toggleClass('active').next('ul.select-options_two').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
       
    });
    //select three
    $('._selec_three').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select_three"></div>');
        $this.after('<div class="select-styled_three"></div>');

        var $styledSelect = $this.next('div.select-styled_three');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options_three '
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled_three.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options_three ').hide();
            });
            $(this).toggleClass('active').next('ul.select-options_three').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });




    //select four
    $('._selec_four').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select_four"></div>');
        $this.after('<div class="select-styled_four"></div>');

        var $styledSelect = $this.next('div.select-styled_four');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options_four '
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled_four.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options_four ').hide();
            });
            $(this).toggleClass('active').next('ul.select-options_four').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    //date picker
    $(function () {
        $(".calender").datepicker({

            'autoclose': true,
            
        });
       

    });
    //sticky nav bar
    $(document).ready(function () {
        var $sticky = $('.sticky');
        var stickyOffsetTop = $sticky.offset().top;

        $(window).scroll(function (e) {
            e.preventDefault();

            var scrollTop = $(window).scrollTop();

            if (scrollTop > stickyOffsetTop) {
                $sticky.addClass('is-fixed');
            } else {
                $sticky.removeClass('is-fixed');
            }
        });
    });
   

    //validation
    $(document).ready(function () {

        $("#sub").click(function () {

            $(this).addClass('_around_4');
            var email;
            email = $("#email").val();
            if (email == "") {
                $("#txt_val").html("Please add a valid email");
                return false;
            }

            else {
                return true;
            }
            

        });

        $("#sbmit").click(function () {

            $(this).addClass('_around_4');
            var select,calend;
            select = $("#selec").val();
           calend= $(".calndr").val();
            if (select != " " &&  calend !=" ") {
                $("#val").html("Please fill both Check in and Check out dates Please change the dates to cover at-least a night Please add how many guest we have!");
                return false;
            }

            else {
                return true;
            }
        });

        $("#valid").click(function () {

                $(this).addClass('_around_4');
                var name,email,phone,message;
                name = $("#name").val();
                email = $("#emaill").val();
                phone = $("#phone").val();
                message = $("#exampleFormControlTextarea1").val();
                if (name == "" && email == ""  && phone =="" && message =="") {
                    $(".text_val").html("Please fill in the required field.");
                    $(".txt_su").html("This value is required.");
                    $(".not_valid").html("Validation errors occurred. Please confirm the fields and submit it again.");
                    $(".not_valid").css("display", "block");
                    $("#loading").css("display", "block");
                    



                                    
                    return false;
                }

                else {
                    return true;
                }



        });
    });
    //mixitup
    $('#portfolio').mixItUp();


    //wow  .js
    new WOW().init();

    //video
    $(document).ready(function () {

        $("#play_one").click(function () {
            $("#cptionhide").hide();
            $("#cptionshow").show();
            $("#disble").hide();
        });
    });
    $(document).ready(function () {

        $("#play_two").click(function () {
            $("#cptionhide").hide();
            $("#cptionshow").show();
            $("#disble").hide();
        });
    });

    $(document).ready(function () {

        $("#stop").click(function () {
            $("#cptionhide").show();
            $("#cptionshow").hide();
            $("#play_one").hide();
            $("#play_two").show();
        });
    });
    
    //smoth scroll

    jQuery(document).ready(function ($) {
        $(".scroll").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top },1100);
        });
    });

    

    $(document).ready(function () {
        // create Calendar from div HTML element
        $(".calndr").kendoCalendar({
            selectable: "multiple",
            weekNumber: true,
            disableDates:
                [
                    new Date('2018/9/1'),
                    new Date('2018/9/2'),
                    new Date('2018/9/3'),
                    new Date('2018/9/4'),
                    new Date('2018/9/5'),
                    new Date('2018/9/6'),
                    new Date('2018/9/7'),
                    new Date('2018/9/8'),
                    new Date('2018/9/9'),
                    new Date('2018/9/10'),
                    new Date('2018/9/11'),
                    new Date('2018/9/12'),
                    new Date('2018/9/13'),
                    new Date('2018/9/14'),
                    new Date('2018/9/15'),
                    new Date('2018/9/16'),
                    new Date('2018/9/17'),
                    new Date('2018/9/18'),
                    new Date('2018/9/19'),
                    new Date('2018/9/20'),
                    new Date('2018/9/21'),
                    new Date('2018/9/22'),
                    new Date('2018/9/23'),

                ]
        
       
        });
       
    });
    //kendo Date Picker
    $(document).ready(function () {
        $(".dattte").kendoDatePicker({
            
            disableDates: ["we", "th"],
          
            //value: new Date(),
            //min: new Date(1950, 0, 1),
            //max: new Date(2049, 11, 31)
        })
        
    });
    
   
})(jQuery);