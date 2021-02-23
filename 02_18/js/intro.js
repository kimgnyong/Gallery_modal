;(function($){
    var intro = {   
        init:function(){     
            var that = this;  
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.familyFn();
        },
        navFn:function(){
            
            var $mainBtn = $('#nav .main-btn');
            var $subBtn = $('#nav .sub');
            var $navUl = $('#nav > ul');

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass("on");

                    $subBtn.removeClass('on');
                    $(this).next().addClass("on");
                }
            });
            $navUl.on({
               mouseleave:function(){
                $mainBtn.removeClass('on');
                $subBtn.removeClass('on');
               } 
            });


        },
        mainSlideFn:function(){
            
            var $slideWrap = $('#section1 .slide-wrap')
            var $prevBtn = $('#section1 .prev-btn')
            var $nextBtn = $('#section1 .next-btn')
            var cnt = 0;

            function slideFn(){
                $slideWrap.stop().animate({left:-800*cnt},600,function(){
                    if(cnt>3)cnt=0;
                    $slideWrap.stop().animate({left:-800*cnt},0);
                    if(cnt<0)cnt=3;
                    $slideWrap.stop().animate({left:-800*cnt},0)
                })
            };
            function nextSlideCountFn(){
                cnt++
                console.log(cnt);
                slideFn();
            };
            function prevSlideCountFn(){
                cnt--
                console.log(cnt);
                slideFn();
            };
            $nextBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated') ){
                        nextSlideCountFn();
                    }
                }
            });
            $prevBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated') ){
                        prevSlideCountFn();
                    }
                }
            });
            
        },
        noticeFn:function(){
            var $noticeBtn = $('#main .notice-btn')
            var $modal = $('#modal')
            var $noticeText = $('#modal .notice-text')
            var $content = $('#modal .content')

            //모달창 열기(띄우기) show, fadeIn, slideDown <--자동으로 display:block가 되는 기능이있음
            $noticeBtn.on({
                click:function(event){
                    event.preventDefault();
                    var txt = $(this).text();   // 클릭한 내용가져오기
                    var tit = $(this).attr('title');   // 클릭한 내용 타이틀 가져오기
                    $modal.show();
                    $noticeText.text(tit);
                }
            })
            //모달창 클릭시 창닫기 hide(), fadeOut(), slideUp() <-- 자동으로 none이 되는 기능이있음
            // 단 $noticeText(h1) 텍스트 위치 박스 클릭시
            // 닫기 이벤트 수행 안함
            $modal.on({
                click:function(event){
                    event.stopPropagation();
                    $modal.hide();
                }
            })
            $content.on({
                click:function(event){
                event.stopPropagation();  // 자손요소에서 클릭시 조상영역위치의 이벤트가 수행되는걸 차단
                }
            })
        },
        galleryFn:function(a){
            var $galleryBtn = $('#main .gallery-btn');
            var $modalGallery = $('#modalGallery');
            var $conTent = $('#modalGallery .content-gallery');

            $galleryBtn.on({
                click:function(e){
                    e.preventDefault();
                    $modalGallery.stop().fadeIn();
                    var bgimg = $(this).parent().css('background-image');
                    $conTent.css({backgroundImage:bgimg});
                }
            })

            $modalGallery.on({
                click:function(){
                    $(this).stop().fadeOut();
                }
            })
            $conTent.on({
                click:function(e){
                    e.stopPropagation();
                }
            })

        },
        bannerFn:function(){

        },
        familyFn:function(){

        }
    }
    intro.init();
})(jQuery);


//goUrl()링크
//BOM
// 매개변수 z에 전달인자(argument)값을 전달받는다

function goUrl(z){

    switch(z){
        case 'noticeMore':
            location.href = 'http://www.bok.or.kr/museum/pgm/master/view.do?progrmSn=84&progrmSeCd=03&menuNo=700124';
            break;
        case 'main1':
            location.href='./main1.html'
            break;
        case 'main1-1':
            location.href='./main1-1.html'
            break;
        case 'main1-2':
            location.href='./main1-2.html'
            break;
        case 'main1-3':
            location.href='./main1-3.html'
            break;
        case 'main1-4':
            location.href='./main1-4.html'
            break;

            case 'main2':
            location.href='./main2.html'
            break;
        case 'main2-1':
            location.href='./main2-1.html'
            break;
        case 'main2-2':
            location.href='./main2-2.html'
            break;
        case 'main2-3':
            location.href='./main2-3.html'
            break;
        case 'main2-4':
            location.href='./main2-4.html'
            break;

            case 'main3':
            location.href='./main3.html'
            break;
        case 'main3-1':
            location.href='./main3-1.html'
            break;
        case 'main3-2':
            location.href='./main3-2.html'
            break;
        case 'main3-3':
            location.href='./main3-3.html'
            break;
        case 'main3-4':
            location.href='./main3-4.html'
            break;

            case 'main4':
            location.href='./main4.html'
            break;
        case 'main4-1':
            location.href='./main4-1.html'
            break;
        case 'main4-2':
            location.href='./main4-2.html'
            break;
        case 'main4-3':
            location.href='./main4-3.html'
            break;
        case 'main4-4':
            location.href='./main4-4.html'
            break;
        default://더이상 조건이 필요 없을
            alert('url전달인자가 잘못왔습니다.'+z+' 확인해주세요');
    }
    /*
    if(z=='noticeMore'){
        location.href = 'http://www.bok.or.kr/museum/pgm/master/view.do?progrmSn=84&progrmSeCd=03&menuNo=700124';
        //window.open('http://www.bok.or.kr/museum/pgm/master/view.do?progrmSn=84&progrmSeCd=03&menuNo=700124');
    }
    
    
    //메인1
    else if(z == 'main1'){
        window.open('./main1.html');
    }else if(z == 'main1-1'){
        location.href = './main1-1.html'
    }else if(z == 'main1-2'){
        location.href = './main1-1.html'
    }else if(z == 'main1-3'){
        location.href = './main1-1.html'
    }else if(z == 'main1-4'){
        location.href = './main1-1.html'
    }
    
    //메인2
    else if(z == 'main2'){
        location.href = './main2.html'
    }else if(z == 'main2-1'){
        location.href = './main2.html'
    }else if(z == 'main2-2'){
        location.href = './main2.html'
    }else if(z == 'main2-3'){
        location.href = './main2.html'
    }else if(z == 'main2-4'){
        location.href = './main2.html'
    }
    
    //메인3
    else if(z == 'main3'){
        location.href = './main3.html'
    }else if(z == 'main3-1'){
        location.href = './main3.html'
    }else if(z == 'main3-2'){
        location.href = './main3.html'
    }else if(z == 'main3-3'){
        location.href = './main3.html'
    }else if(z == 'main3-4'){
        location.href = './main3.html'
    }
    
    //메인4
    else if(z == 'main4'){
        location.href = './main4.html';
    }else if(z == 'main4-1'){
        location.href = './main4.html';
    }else if(z == 'main4-2'){
        location.href = './main4.html';
    }else if(z == 'main4-3'){
        location.href = './main4.html';
    }else if(z == 'main4-4'){
        location.href = './main4.html';
    }
    // 예외처리
    else{
        alert('url전달인자가 잘못왔습니다.'+z+' 확인해주세요');
    }
    */   
}
