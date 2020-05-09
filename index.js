const lady = document.querySelector(".lady-img");
lady.classList.add("lady-animation"), $(function () {
    AOS.init({
        duration: 2e3,
        throttleDelay: 99,
        easing: "ease-in-out",
        delay: 500,
        offset: 120,
        debounceDelay: 50
    })
}), $(window).on("resize", function () {
    AOS.refresh()
}), $(window).on("load", function () {
    AOS.refresh()
}), $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3), !1
        }
    })
});