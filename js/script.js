(function($) {
    $(document).ready(function() {
        "use strict";

        // cursor pointer

        const cursor = document.querySelector(".cursor");

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.pageX + -10 + "px";
            cursor.style.top = e.pageY + -10 + "px";
        });

        //   lines

        $.fn.duplicate = function(a, b) {
            var c = [];
            for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
            return this.pushStack(c);
        };
        $("<div class='container full-height'></div>").appendTo(".sec-lines");
        $("<div class='line-item'></div>").duplicate(4).appendTo(".sec-lines .container");


        // nav tab auto change

        let totalTabsCount = 0;
        let activeTabIndex = 2;
        let tabChangeTimeout = 3000;

        totalTabsCount = $("#v-pills-tab .nav-link").length;

        function tabChangeHandler() {



            $('.newclass').removeClass("active");

            var element = document.getElementById("servicetab" + activeTabIndex);
            element.classList.add("active");

            var element = document.getElementById("service" + activeTabIndex);
            element.classList.add("active");
            if (activeTabIndex == 5) {
                activeTabIndex = 1
            } else {
                activeTabIndex = activeTabIndex + 1
            }

        }

        let AUTO_CHANGE_TIMER = setInterval(tabChangeHandler, tabChangeTimeout);



    });




    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.client-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.cmpny-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 15,
        loop: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    // portfoloio carousel
    $('.blog-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 15,
        loop: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // switch theme

    const btn = document.getElementById('switch-theme');
    localStorage.setItem('theme', 'light');
    btn.addEventListener('click', (e) => {
        let theme = localStorage.getItem('theme');
        console.log(theme);
        if (theme == 'light' || theme == '') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    })

    // search
    const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    const searchData = document.querySelector(".search-data");
    searchBtn.onclick = () => {
        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
        searchInput.focus();
        if (searchInput.value != "") {
            var values = searchInput.value;
            searchData.classList.remove("active");

        } else {
            searchData.textContent = "";
        }
    }
    cancelBtn.onclick = () => {
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
        searchData.classList.toggle("active");
        searchInput.value = "";
    }


    // search-box open close js code
    let navbar = document.querySelector(".navbar");

    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function() {
        navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function() {
        navLinks.style.left = "-100%";
    }


    // sidebar submenu open close js code
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    htmlcssArrow.onclick = function() {
        navLinks.classList.toggle("show1");
    }
    let moreArrow = document.querySelector(".more-arrow");
    moreArrow.onclick = function() {
        navLinks.classList.toggle("show2");
    }
    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
        navLinks.classList.toggle("show3");
    }

})(jQuery);