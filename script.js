document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleButton').addEventListener('click', function() {
        var content = document.getElementById('toggleContent');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});