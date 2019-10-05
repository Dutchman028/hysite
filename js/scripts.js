$(function() {
    var $profile=$('.profile');
    var $top=$('.top');
    var $work=$('.works');
    var $mail=$('.mail');
//function area
    function top_showhide(){
        if($top.css('display')!='none'){
            $top.hide();
        }
    }

    function profile_showhide(){
        if($profile.css('display')!='none'){
            $profile.hide();
        }
    }

    function work_showhide(){
        if($work.css('display')!='none'){
            $work.hide();
        }
    }

    function mail_showhide(){
        if($mail.css('display')!='none'){
            $mail.hide();
        }
    }
//function area

//切り替え部分
    $('#menu-profile').click(function(){
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('profile-select');
        if($top.css('display')!='none'){
            $top.fadeOut(200);
        }
       work_showhide();
       mail_showhide();
            $profile.fadeIn(1000);
    });

    $('#menu-work').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-mail').removeClass('mail-select');
        $(this).addClass('work-select');
        profile_showhide();
        top_showhide();
        mail_showhide();
        $work.fadeIn(900);
    });

    $('#menu-mail').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $(this).addClass('mail-select');
        work_showhide();
        profile_showhide();
        top_showhide();
        $mail.fadeIn(900);

    });

    $('.logo').click(function(){
        $('#menu-profile').removeClass('profile-select');
        $('#menu-work').removeClass('work-select');
        $('#menu-mail').removeClass('mail-select');
       profile_showhide();
       work_showhide();
       mail_showhide();
        $top.fadeIn(900);
    });



//切り替え部分終了


//modal


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })



    
  });