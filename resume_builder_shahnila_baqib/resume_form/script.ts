const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

// Filter click event
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    filters.forEach((btn) => btn.classList.remove('active'));
    
    // Add active class to the clicked filter
    filter.classList.add('active');
    
    // Filter cards based on filter text (Example only; add data attributes for real filtering)
    const filterText = filter.textContent?.toLowerCase();
    cards.forEach((card) => {
      if (filterText === 'all templates' || card.innerHTML.toLowerCase().includes(filterText)) {
        (card as HTMLElement).style.display = 'block';
      } else {
        (card as HTMLElement).style.display = 'none';
      }
    });
  });
});
