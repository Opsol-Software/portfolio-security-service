// Select all cards
const cards = document.querySelectorAll('.Lcard');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Collapse other expanded cards
        document.querySelectorAll('.Lcard.expanded').forEach(expandedCard => {
            if (expandedCard !== card) {
                expandedCard.classList.remove('expanded');
            }
        });
        // Expand the clicked card
        card.classList.toggle('expanded');
    });
});


