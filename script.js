// script.js — small behaviors: current year, smooth scroll, theme toggle
document.addEventListener('DOMContentLoaded', function(){
  // year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // smooth internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      if(!targetId) return;
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // theme toggle (simple class toggle)
  const toggle = document.getElementById('theme-toggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('lightmode');
      // toggle icon
      toggle.textContent = document.body.classList.contains('lightmode') ? '🌞' : '🌗';
    });
  }
});