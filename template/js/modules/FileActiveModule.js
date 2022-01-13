export default function FileActiveModule() {

    if ($('.header-account')) {
        const $search = $('.header-account');

        $(document).mouseup(function (e) {
            if (!$search.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                && $search.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
            {
                $search.removeClass('active');
            }
        });

        $('.account-title').on('click', function () {
            $search.toggleClass('active');
        });
    }


    if ($('.course-list-content')) {

        document.querySelectorAll('.course-list .drop').forEach(el => {
            const dropdown = el;
            const drop = dropdown.querySelector('p');

            drop.onclick = function (a) {
                a.preventDefault();
                $(this).next('.sub').slideToggle();
                $(this).closest('.drop').siblings().find('.sub').slideUp();
                $(this).parent().toggleClass('curent');
                $(this).parent().closest('.curent').siblings().removeClass('curent');
                $(this).toggleClass('curent');
                $(this).parent().closest('.curent').siblings().find('p').removeClass('curent');
            }
        });
    }

    if ($('.tab-mobi')) {
        $('.tab-link-mobi').on('click', function () {
            $('.tab-link').slideToggle();
        });
    }

    if ($('.collapse-inner')) {
        $('.collapse-tt').on('click', function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
        });
    }

    if ($('.icourse-collapse')) {
        $('.icourse-label').on('click', function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().removeClass('active');
            $(this).closest('.icourse-b').siblings().find('.icourse-coten').slideUp();
        });
    }

    
   
}

