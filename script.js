document.addEventListener('keydown', function(event) {
    const images = document.querySelectorAll('.col a');
    let currentIndex = Array.from(images).findIndex(img => img === document.activeElement);

    if (event.key === 'ArrowRight') {
        // Move focus to the next image
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].focus();
    } else if (event.key === 'ArrowLeft') {
        // Move focus to the previous image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].focus();
    }
});
