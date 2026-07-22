 console.log("JavaScript is connected!");

const viewMoreBtn = document.getElementById('view-more-btn');
const extraPosts = document.querySelectorAll('.hidden'); // Updated to .hidden

viewMoreBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the page from jumping up to '#'
    
    extraPosts.forEach(post => {
        post.classList.remove('hidden');
    });
    
    // Hide the button once expanded
    viewMoreBtn.style.display = 'none';
});