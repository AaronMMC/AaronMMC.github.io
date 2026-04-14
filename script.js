function showSection(id) {
  const sections = ['hero','about','projects','contact'];
  const navBtns = sections.map(s => document.getElementById('nav-'+s));
  
  // Jump to the top immediately to prevent awkward scrolling
  window.scrollTo(0, 0);

  sections.forEach((s, i) => {
    const el = document.getElementById(s);
    const btn = navBtns[i];
    
    if (s === id) {
      // Show the new section
      el.classList.add('visible');
      btn.classList.add('active');
      // A tiny delay ensures the CSS fade-in animation triggers smoothly
      setTimeout(() => el.classList.add('shown'), 10);
    } else {
      // Instantly hide the other sections so they don't take up empty space
      el.classList.remove('shown');
      el.classList.remove('visible'); 
      btn.classList.remove('active');
    }
  });
}
