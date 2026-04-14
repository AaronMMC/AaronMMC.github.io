function showSection(id) {
  const sections = ['hero','about','projects','contact'];
  const navBtns = sections.map(s => document.getElementById('nav-'+s));
  
  sections.forEach((s, i) => {
    const el = document.getElementById(s);
    const btn = navBtns[i];
    
    if (s === id) {
      el.classList.add('visible');
      btn.classList.add('active');
      setTimeout(() => el.classList.add('shown'), 10);
    } else {
      el.classList.remove('shown');
      el.classList.remove('visible'); 
      btn.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
