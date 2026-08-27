
document.getElementById('year').textContent = new Date().getFullYear();
 
// tabbed segments — works for any section with a .tab-row
// (Clothes and Perfumes both use this same pattern independently)
document.querySelectorAll('.tab-row').forEach(tabRow => {
  const section = tabRow.closest('section');
  const buttons = tabRow.querySelectorAll('.tab-btn');
  const panels = section.querySelectorAll('.tab-panel');
 
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      section.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });
});
 