$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    $(".main_content").fullpage({
        anchors: ['main', 'sub01', 'sub02', 'sub03', 'sub04',],
        // navigation: true,//네비게이션 유무
        // navigationPosition: "right",//네비게이션 위치

        // navigationTooltips: ["MAIN", "NEWS", "3번", "4번"],//네비게이션 텍스트, 배열의 형식
        // showActiveTooltip: true//네비게이션 선택 메뉴 활성화

        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        scrollOverflow: true,
        //아랜 속도 부분... https://jqueryui.com/easing/ 참고.

        afterRender: function () {
            $('.main_content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.main_content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.archor li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }

    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });





    $('.sub_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        dots: false,

        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]

    });


    $('.sub_visual .arrows .left').on('click', function () {
        $('.sub_slide').slick('slickPrev');
    });
    $('.sub_visual .arrows .right').on('click', function () {
        $('.sub_slide').slick('slickNext');
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.fnt').addClass('on') : $('.fnt').removeClass('on');
    })




    $('.fnt').each(function () {
        $(this).prop('fnt', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



    $('.company_slide').slick({
        arrows: false,
        fade: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
    });



    $('.family').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })


    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.re_gnb').toggleClass('on');
    });

    $('.re_gnb li>a').on('click', function (e) {
        if ($('.re_gnb').hasClass('on')) {

            //서버메뉴가 없으면 바로 클릭되게 하기
            if ($(this).next().size() != 0) {
                e.preventDefault();
            }
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.snb').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.re_gnb').removeClass('on')
    });

    $('.re_gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    })




})


