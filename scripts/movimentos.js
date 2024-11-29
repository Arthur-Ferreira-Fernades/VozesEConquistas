function toggleInfo(movimento) {
    const info = document.getElementById('info-' + movimento);
    const description = document.getElementById(movimento);

    if (info.style.display === 'none') {
        info.style.display = 'block';
        description.style.display = 'none';
    } else {
        info.style.display = 'none';
        description.style.display = 'block';
    }
}

function searchMovements() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('.description').textContent.toLowerCase();
        
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
