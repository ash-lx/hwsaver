document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', function() {
        alert('You clicked the heading!');
    });
});
