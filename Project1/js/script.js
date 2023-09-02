// const moreButton = document.querySelector('.more');
// const commentContent = document.querySelector('.comment-content');
// const contentScroll = document.querySelector('.content-scroll');

// moreButton.addEventListener('click', () => {
//     if (commentContent.classList.contains('expanded')) {
//         commentContent.classList.remove('expanded');
//         contentScroll.style.height = '0';
//     } else {
//         commentContent.classList.add('expanded');
//         contentScroll.style.height = 'auto';
//     }
// });


// const moreButton = document.querySelector('.more');
// const commentContent = document.querySelector('.comment-content');

// moreButton.addEventListener('click', () => {
//     commentContent.classList.toggle('expanded');
// });

// const moreButton = document.querySelector('.more');
// const commentContent = document.querySelector('.comment-content');

// moreButton.addEventListener('click', () => {
//     commentContent.classList.toggle('expanded');
// });

// const moreButtons = document.querySelectorAll('.more');

// moreButtons.forEach(moreButton => {
//     moreButton.addEventListener('click', () => {
//         const commentContent = moreButton.closest('.comment-content');
//         commentContent.classList.toggle('expanded');
//     });
// });

const moreButtons = document.querySelectorAll('.more');

moreButtons.forEach((moreButton, index) => {
    moreButton.addEventListener('click', () => {
        const commentContent = document.querySelector(`#comment${index + 1}`);
        commentContent.classList.toggle('expanded');
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});

// for profile modal
document.getElementById('openProfileModal').addEventListener('click', function() {
    $('#profileModal').modal('show');
});