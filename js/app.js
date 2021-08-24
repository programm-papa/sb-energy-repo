$(document).ready(function app() {
    //Обработка прогресcбара для ПК
    if ($(window).width() > 1110) {
        $(window).scroll(function() {
            let classList = $('.active-page').attr('class');
            let scroll = $(window).scrollTop() + $(window).height();
            if (classList.indexOf('on-main') !== -1) {
                changeProgressBar(0);
            } else if (classList.indexOf('extraction-id') !== -1) {
                let p1 = $('#1').offset().top;
                let p2 = $('#2').offset().top;
                let p3 = $('#3').offset().top;
                let p4 = $('#4').offset().top;
                let p5 = $('#5').offset().top;
                let p6 = $('#6').offset().top;
                let p7 = $('#7').offset().top;
                if (scroll < p1) {
                    changeProgressBar(0);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(28);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(57);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(85);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(114);
                } else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(142);
                } else if (scroll > p7) {
                    changeProgressBar(171);
                } 
                

            } else if (classList.indexOf('refining-id') !== -1) {
                let p1 = $('#11').offset().top;
                let p2 = $('#12').offset().top;
                let p3 = $('#13').offset().top;
                let p4 = $('#14').offset().top;
                let p5 = $('#15').offset().top;
                let p6 = $('#16').offset().top;
                let p7 = $('#17').offset().top;
                if (scroll < p1) {
                    changeProgressBar(171);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(199);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(228);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(256);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(285);
                } else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(313);
                } 
                 else if (scroll > p7) {
                    changeProgressBar(342);
                }
            } else if (classList.indexOf('oilfield-services-id') !== -1) {
                let p1 = $('#21').offset().top;
                let p2 = $('#22').offset().top;
                let p3 = $('#23').offset().top;
                let p4 = $('#24').offset().top;
                let p5 = $('#25').offset().top;
                let p6 = $('#26').offset().top;
                let p7 = $('#27').offset().top;
                if (scroll < p1) {
                    changeProgressBar(342);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(370);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(399);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(427);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(456);
                } else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(484);
                } else if (scroll > p7) {
                    changeProgressBar(513);
                }
            } else if (classList.indexOf('petrochemicals-id') !== -1) {
                let p1 = $('#31').offset().top;
                let p2 = $('#32').offset().top;
                let p3 = $('#33').offset().top;
                let p4 = $('#34').offset().top;
                let p5 = $('#35').offset().top;
                let p6 = $('#36').offset().top;
                let p7 = $('#37').offset().top;
                if (scroll < p1) {
                    changeProgressBar(513);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(541);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(570);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(598);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(627);
                } else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(655);
                } else if (scroll > p7) {
                    changeProgressBar(684);
                }
            } else if (classList.indexOf('transportation-id') !== -1) {
                let p1 = $('#41').offset().top;
                let p2 = $('#42').offset().top;
                let p3 = $('#43').offset().top;
                let p4 = $('#44').offset().top;
                let p5 = $('#45').offset().top;
                let p6 = $('#46').offset().top;
                let p7 = $('#47').offset().top;
                if (scroll < p1) {
                    changeProgressBar(684);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(712);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(741);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(769);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(798);
                } else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(826);
                } else if (scroll > p7) {
                    changeProgressBar(855);
                }
            } else if (classList.indexOf('gas-processing-id') !== -1) {
                let p1 = $('#51').offset().top;
                let p2 = $('#52').offset().top;
                let p3 = $('#53').offset().top;
                let p4 = $('#54').offset().top;
                let p5 = $('#55').offset().top;
                let p6 = $('#56').offset().top;
                let p7 = $('#57').offset().top;
                if (scroll < p1) {
                    changeProgressBar(855);
                } else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(883);
                } else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(912);
                } else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(940);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(969);
                } else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(997);
                } else if (scroll > p7) {
                    changeProgressBar(1031);
                }
            }
        });
    }
    //Заполнение прогресcбара
    function changeProgressBar(length) {

        if ($(window).width() > 1110) {
            length = length + "px";
            let progressBar = $('.top-header.desctop .progress-wrapper');
            $(progressBar).css("width", length);
        } else {
            length = length + "%";
            let progressBar = $('.top-header.adaptive .progress-wrapper');
            $(progressBar).css("width", length);
        }
    }
    //Обработка нажатия кнопки глосария
    $('.glossary-btn').on('click', function() {
        $(this).toggleClass('glossary-open');
        $('.glossary-content').toggleClass('content-open');
    });
    //Обработка нажатия кнопки подотраслей
    $('.subindustry-btn').on('click', function() {
        $(this).toggleClass('active-btn ');
        $('.subindustry-menu').toggleClass('open-subindustry');
    });
    //Мобильное меню, обработка кликов на адаптиве
    $('.menu-button').on('click', function() {
        $(this).toggleClass('open');
        $('.adaptive-menu').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Закрытие меню при клике на ссылку подменю
    $('body').on('click', '.sub-menu-link', function() {
        $('.menu-button').toggleClass('open');
        $('.adaptive-menu').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Обработчик кнопок мобильного глосария 
    $('.adaptive-glossary-btn').on('click', function() {
        $('.adaptive-glossary').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Обработка разворачиваемого контента
    $('.collapsible-title').on('click', function() {
        $(this).toggleClass('open');
    })


    //Обработчик перехода по подстраницам и запуск лоадера
    //Работаем через делегированные события, тк мы добавляем новые элементы, на которые старые eventListenerы не распространяются 
    $('body').on('click', '.page-link', function() {
        let transition = $('.transition');
        let buttonClass = $(this).attr('class');
        transition.toggleClass('load');
        $('body').addClass('scroll-off');
        setTimeout(function() {
            $('.loader').toggleClass('loader-active ');
        }, 600)
        setTimeout(function() {
            let activePage = $('.active-page');
            activePage.addClass('hidden');
            activePage.removeClass('active-page');
            $("body,html").animate({
                scrollTop: 0
            }, 1);
            //Выключение меню подотрасли
            if ($('.subindustry-menu').hasClass('open-subindustry')) {
                $('.subindustry-menu').removeClass('open-subindustry');
                if ($('.subindustry-btn').hasClass('active-btn')) {
                    $('.subindustry-btn').removeClass('active-btn');
                }
            }


            //Изменение страниц
            if (buttonClass.indexOf('on-main') !== -1) {
                if ($('main.main-page').hasClass('hidden')) {
                    $('main.main-page').removeClass('hidden');
                }
                $('main.main-page').addClass('active-page');
                //Изменение header
                if ($(window).width() > 1110) {
                    changeProgressBar(0);
                } else if ($(window).width() > 767) {
                    changeProgressBar(17);
                }
                changeHeader('on-main');
                changeFooter('on-main');
            } else if (buttonClass.indexOf('extraction-id') !== -1) {
                if ($('main.extraction-id').hasClass('hidden')) {
                    $('main.extraction-id').removeClass('hidden');
                }
                $('main.extraction-id').addClass('active-page');
                //Изменение header
                changeProgressBar(0);
                changeHeader('extraction-id');
                changeFooter('extraction-id');
            } else if (buttonClass.indexOf('refining-id') !== -1) {
                if ($('main.refining-id').hasClass('hidden')) {
                    $('main.refining-id').removeClass('hidden');
                }
                $('main.refining-id').addClass('active-page');
                //Изменение header
                changeProgressBar(171);
                changeHeader('refining-id');
                changeFooter('refining-id');
            } else if (buttonClass.indexOf('oilfield-services-id') !== -1) {
                if ($('main.oilfield-services-id').hasClass('hidden')) {
                    $('main.oilfield-services-id').removeClass('hidden');
                }
                $('main.oilfield-services-id').addClass('active-page');
                //Изменение header
                changeProgressBar(342);
                changeHeader('oilfield-services-id');
                changeFooter('oilfield-services-id');
            } else if (buttonClass.indexOf('petrochemicals-id') !== -1) {
                if ($('main.petrochemicals-id').hasClass('hidden')) {
                    $('main.petrochemicals-id').removeClass('hidden');
                }
                $('main.petrochemicals-id').addClass('active-page');
                //Изменение header
                changeProgressBar(513);
                changeHeader('petrochemicals-id');
                changeFooter('petrochemicals-id');
            } else if (buttonClass.indexOf('transportation-id') !== -1) {
                if ($('main.transportation-id').hasClass('hidden')) {
                    $('main.transportation-id').removeClass('hidden');
                }
                $('main.transportation-id').addClass('active-page');
                //Изменение header
                changeProgressBar(684);
                changeHeader('transportation-id');
                changeFooter('transportation-id');
            } else if (buttonClass.indexOf('gas-processing-id') !== -1) {
                if ($('main.gas-processing-id').hasClass('hidden')) {
                    $('main.gas-processing-id').removeClass('hidden');
                }
                $('main.gas-processing-id').addClass('active-page');
                //Изменение header
                changeProgressBar(855);
                changeHeader('gas-processing-id');
                changeFooter('gas-processing-id');
            }

            //Выключения меню подотраслей
            if ($('.adaptive-menu').hasClass('open')) {
                $('.menu-button').removeClass('open');
                $('.adaptive-menu').removeClass('open');
            }
        }, 1200)
        setTimeout(function() {
            $('.loader').toggleClass('loader-active');
        }, 3000)
        setTimeout(function() {
            transition.toggleClass('load');
        }, 2600)
        setTimeout(function() {
            $('body').removeClass('scroll-off');
        }, 3800)
    });

    //Изменение хедера
    function changeHeader(pageId) {
        console.log(pageId + ' id новой страницы');
        //Изменение окраски и контента header
        if (pageId === 'on-main') {
            if (!$('header').hasClass('main-page')) {
                if ($('header').hasClass('other-page')) {
                    $('header').removeClass('other-page');
                }
                $('header').addClass('main-page');
            }
        } else {
            if ($('header').hasClass('main-page')) {
                if (!$('header').hasClass('other-page')) {
                    $('header').removeClass('main-page');
                    $('header').addClass('other-page');
                }
            }
        }
        if ($(window).width() > 1110) {
            if (pageId !== 'on-main') {
                let activeLink = '.subindustry-menu ul .page-link.' + pageId;
                if ($('.page-link.active').hasClass('active')) {
                    $('.page-link.active').removeClass('active')
                }
                console.log(activeLink);
                $(activeLink).addClass('active');
            }
        }

        //Изменение меню navigation
        if (pageId === 'on-main') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a class="page-link extraction-id">Традиционная&nbsp;Генерация</a><div class="nav-line"></div></li><li><a class="page-link refining-id">Атомная&nbsp;промышленность</a> <div class="nav-line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ&nbsp;генерация</a> <div class="nav-line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые&nbsp;компании</a> <div class="nav-line"></div> </li> <li><a class="page-link transportation-id">Сбытовые&nbsp;компании</a> <div class="nav-line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="nav-line"></div> </li>');
            }
        } else if (pageId === 'extraction-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#1" class="">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#2" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#3" class="">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#4" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#5" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#6" class="">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li><li><a href="#7" class="">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Традиционная Генерация</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#1" class="sub-menu-link">Краткое  описание</a><div class="nav-line"></div></li> <li><a href="#2" class="sub-menu-link">Регулирование  подотрасли</a><div class="nav-line"></div></li> <li><a href="#3" class="sub-menu-link">Основные  риски</a><div class="nav-line"></div></li> <li><a href="#4" class="sub-menu-link">Анализ и финансовое  моделирование</a><div class="nav-line"></div></li> <li><a href="#5" class="sub-menu-link">Список  документов</a><div class="nav-line"></div></li> <li><a href="#6" class="sub-menu-link">Структурирование  кредитных сделок</a><div class="nav-line"></div></li><li><a href="#7" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a href="#1" class="sub-menu-link">Краткое  описание</a><div class="nav-line"></div></li> <li><a href="#2" class="sub-menu-link">Регулирование  подотрасли</a><div class="nav-line"></div></li> <li><a href="#3" class="sub-menu-link">Основные  риски</a><div class="nav-line"></div></li> <li><a href="#4" class="sub-menu-link">Анализ и финансовое  моделирование</a><div class="nav-line"></div></li> <li><a href="#5" class="sub-menu-link">Список  документов</a><div class="nav-line"></div></li> <li><a href="#6" class="sub-menu-link">Структурирование  кредитных сделок</a><div class="nav-line"></div></li><li><a href="#7" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li></div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        } else if (pageId === 'refining-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#11" class="sub-menu-link">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#12" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#13" class="sub-menu-link">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#14" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#15" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#16" class="sub-menu-link">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#17" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Атомная промышленность</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#11" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#12" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#13" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#14" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#15" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#16" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#17" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li></ul> </li> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="page-link extraction-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a href="#11" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#12" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#13" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#14" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#15" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#16" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#17" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        } else if (pageId === 'oilfield-services-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#21" class="sub-menu-link">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#22" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#23" class="sub-menu-link">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#24" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#25" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#26" class="sub-menu-link">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#27" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>ВИЭ генерация услуги</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#21" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#22" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#23" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#24" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#25" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#26" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#27" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a href="#21" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#22" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#23" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#24" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#25" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#26" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li> <li><a href="#27" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        } else if (pageId === 'petrochemicals-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#31" class="">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#32" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#33" class="">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#34" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#35" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#36" class="">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li><li><a href="#37" class="">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Сетевые компании</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#31"  class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#32"  class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#33"  class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#34"  class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#35"  class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#36"  class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#37"  class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Сетевые компании</a> <div class="line"></div> </li> <li><a href="#31"  class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#32"  class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#33"  class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#34"  class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#35"  class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#36"  class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#37"  class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        } else if (pageId === 'transportation-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#41" class="">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#42" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#43" class="">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#44" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#45" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#46" class="">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li><li><a href="#47" class="">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Сетевые компании</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#41" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#42" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#43" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#44" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#45" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#46" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#47" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li></ul> </li> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Сетевые компании</a> <div class="line"></div> </li> <li><a href="#41" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#42" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#43" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#44" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#45" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#46" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#47" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        } else if (pageId === 'gas-processing-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#51" class="">Краткое<br>описание</a><div class="nav-line"></div></li> <li><a href="#52" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#53" class="">Основные<br>риски</a><div class="nav-line"></div></li> <li><a href="#54" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#55" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#56" class="">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li><li><a href="#57" class="">Резюме</a><div class="nav-line"></div></li>');
            } else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a> Теплоснабжение </a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#51" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#52" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#53" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#54" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#55" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#56" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#57" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li>')
                } else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class=""> Теплоснабжение </a> <div class="line"></div> <li><a href="#51" class="sub-menu-link">Краткое описание</a><div class="nav-line"></div></li> <li><a href="#52" class="sub-menu-link">Регулирование подотрасли</a><div class="nav-line"></div></li> <li><a href="#53" class="sub-menu-link">Основные риски</a><div class="nav-line"></div></li> <li><a href="#54" class="sub-menu-link">Анализ и финансовое моделирование</a><div class="nav-line"></div></li> <li><a href="#55" class="sub-menu-link">Список документов</a><div class="nav-line"></div></li> <li><a href="#56" class="sub-menu-link">Структурирование кредитных сделок</a><div class="nav-line"></div></li><li><a href="#57" class="sub-menu-link">Резюме</a><div class="nav-line"></div></li> </div> <div> <li><a class="page-link extraction-id">Традиционная Генерация</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Атомная промышленность</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">ВИЭ генерация услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Сетевые компании</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Сбытовые компании</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id"> Теплоснабжение </a> <div class="line"></div> </li> </div>');
                }

            }
        }
    }

    //Изменение футера 
    function changeFooter(pageId) {
        //Добавление класса к футеру, для его отображения
        if (pageId === 'on-main') {
            if (!$('footer').hasClass('main-page')) {
                if ($('footer').hasClass('other-page')) {
                    $('footer').removeClass('other-page');
                }
                $('footer').addClass('main-page');
            }
        } else {
            if ($('footer').hasClass('main-page')) {
                if (!$('footer').hasClass('other-page')) {
                    $('footer').removeClass('main-page');
                    $('footer').addClass('other-page');
                }
            }
            //Нужные нам кнопки
            let pagePrev = $('.page-prev');
            let pagePrevLink = $('.page-prev .prev-button');
            let pagePrevName = $('.page-prev .page-name');

            let pageNext = $('.page-next');
            let pageNextLink = $('.page-next .next-button');
            let pageNextName = $('.page-next .page-name');
            //Ссылки на все страницы
            const linkArr = ['on-main', 'extraction-id', 'refining-id', 'oilfield-services-id', 'petrochemicals-id', 'transportation-id', 'gas-processing-id'];
            console.log(linkArr);

            //Удаление скрытия на кнопках
            if (pagePrev.hasClass('hidden')) {
                pagePrev.removeClass('hidden')
            }
            if (pageNext.hasClass('hidden')) {
                pageNext.removeClass('hidden')
            }


            //Удаление ссылок на страницы
            console.log(linkArr.length);
            for (i = 0; i < linkArr.length; ++i) {
                if (pagePrevLink.hasClass(linkArr[i])) {
                    pagePrevLink.removeClass(linkArr[i]);
                }
            }
            for (i = 0; i < linkArr.length; ++i) {
                if (pageNextLink.hasClass(linkArr[i])) {
                    pageNextLink.removeClass(linkArr[i]);
                }
            }

            //Изменение контента footer для конкретных страниц
            if (pageId === 'extraction-id') {
                pagePrev.addClass('hidden');
                pageNextLink.addClass('refining-id');
                pageNextName.html('Атомная промышленность');
            } else if (pageId === 'refining-id') {
                pagePrevLink.addClass('extraction-id');
                pageNextLink.addClass('oilfield-services-id');
                pagePrevName.html('Традиционная Генерация');
                pageNextName.html('ВИЭ генерация услуги');
            } else if (pageId === 'oilfield-services-id') {
                pagePrevLink.addClass('refining-id');
                pageNextLink.addClass('petrochemicals-id');
                pagePrevName.html('Атомная промышленность');
                pageNextName.html('Сетевые компании');
            } else if (pageId === 'petrochemicals-id') {
                pagePrevLink.addClass('oilfield-services-id');
                pageNextLink.addClass('transportation-id');
                pagePrevName.html('ВИЭ генерация услуги');
                pageNextName.html('Сетевые компании');
            } else if (pageId === 'transportation-id') {
                pagePrevLink.addClass('petrochemicals-id');
                pageNextLink.addClass('gas-processing-id');
                pagePrevName.html('ВИЭ генерация услуги');
                pageNextName.html('Сетевые компании');
            } 
            else if (pageId === 'gas-processing-id') {
                pagePrevLink.addClass('transportation-id');
                pageNextLink.addClass('on-main');
                pagePrevName.html('ВИЭ генерация услуги');
                pageNextName.html('На Главную');
            }
        }
    }

    //Функции работы с popup-info
    $('.orange-info-text').on("click", function() {
        let elementId = $(this).prop('id');
        let popup = $('.popup-info');
        let nameInfo = $('.popup-info .popup-content .name');
        let contentInfo = $('.popup-info .popup-content .content');
        let position = 0;
        if ($(window).width() < 1110) {
            if ($('.main-page').hasClass('active')) {
                position = $(window).scrollTop() + 60;
            } else {
                position = $(window).scrollTop() + 50;
            }
            $('body').addClass('scroll-off');
        } else {
            position = $(this).offset().top - popup.height() / 2;
        }
        //Добавляем текст в попап
        if (elementId == "a") {
            nameInfo.html('~3% ВВП');
            contentInfo.html('<a href="http://www.myenergy.ru/russia/" target="_blank">www.myenergy.ru</a>')
        } else if (elementId == "b") {
            nameInfo.html('В 2019');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "c") {
            nameInfo.html('Зеленое кредитование');
            contentInfo.html('Решение КПКИ ЦА от 18.03.2020 № 1174 «Об утверждении Концепции «Зеленое кредитование» для клиентов сегментов Средний/Крупный/Крупнейший бизнес» и Решение КПКИ ЦА от 02.09.2020 № 1227/6 «Об утверждении условий продукта Зеленое кредитование».')
        } else if (elementId == "d") {
            nameInfo.html('Структура установленной мощности электростанций ЕЭС России на начало 2020 г.');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "e") {
            nameInfo.html('1 080 555,4 млн кВт*ч');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "f") {
            nameInfo.html('в 2019 г. была следующая');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "g") {
            nameInfo.html('Средний КИУМ электростанций ЕЭС России за 2018 и 2019 гг. (в %) в зависимости от типа генерации был следующим:');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "h") {
            nameInfo.html('Установленная мощность, ГВт');
            contentInfo.html('По данным сайтов указанных компаний.')
        } else if (elementId == "i") {
            nameInfo.html('Получения статуса субъекта оптового рынка');
            contentInfo.html('<a href="https://www.np-sr.ru/ru/market/cominfo/rus/index.htm" target="_blank">www.np-sr.ru</a>')
        } else if (elementId == "j") {
            nameInfo.html('Валовая Маржа');
            contentInfo.html('Уровни валовой маржи представлены индикативно и могут изменяться в процессе структурирования сделок. ')
        } else if (elementId == "k") {
            nameInfo.html('Меньше 1%');
            contentInfo.html('<a href="https://minenergo.gov.ru/node/532" target="_blank">minenergo.gov.ru</a>')
        } else if (elementId == "l") {
            nameInfo.html('5,3 ГВт');
            contentInfo.html('Отчет Центра финансовых расчетов (ЦФР) о ходе реализации отобранных инвестиционных проектов за 1 квартал 2020 г. ')
        } else if (elementId == "m") {
            nameInfo.html('2,6 ГВт ВЭУ и 2,1 ГВт ФЭМ');
            contentInfo.html('Презентация Роснано «Программа поддержки ВИЭ на период 2025–2035 гг.»')
        } else if (elementId == "n") {
            nameInfo.html('С 2015 г');
            contentInfo.html('Постановление Правительства РФ №47 от 23.01.2015.')
        } else if (elementId == "o") {
            nameInfo.html('Правительство РФ');
            contentInfo.html('Постановление Правительства РФ №1298 от 29.08.2020. ')
        } else if (elementId == "p") {
            nameInfo.html('1 квартал 2020 г');
            contentInfo.html('ЦФР.')
        }
        
        //Открытие окна
        if (!popup.hasClass('open')) {
            popup.addClass('open');
        }
        popup.css({
            'top': position
        })
    });

    $('.popup-info .popup-content .close').on("click", function() {
        let popup = $('.popup-info');
        if ($(window).width() < 1110) {
            $('body').removeClass('scroll-off');
            if (popup.hasClass('open')) {
                popup.removeClass('open');
            }
        } else {
            if (popup.hasClass('open')) {
                popup.removeClass('open');
            }
        }

    })
});