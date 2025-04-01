window.addEventListener("beforeunload", function () {
    window.scrollTo(0, 0);
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery__item img');

    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('click', function() {
            if (img.src === originalSrc) {
                img.src = hoverSrc;
            } else {
                img.src = originalSrc;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery__item img');

    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', function() {
            img.src = hoverSrc;
        });

        img.addEventListener('mouseleave', function() {
            img.src = originalSrc;
        });
    });
});



