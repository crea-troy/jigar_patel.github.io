/* shared.js — nav shadow + scroll reveal + active link */
(function(){
  // nav shadow on scroll
  const nav = document.getElementById('topnav');
  if(nav){
    window.addEventListener('scroll', ()=> nav.classList.toggle('shadow', window.scrollY > 30));
  }

  // active nav link by current page
  const links = document.querySelectorAll('.nav-links a');
  const path  = location.pathname.replace(/\/$/,'');
  links.forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/,'');
    if(path.endsWith(href) && href !== '') a.classList.add('active');
    if((path === '' || path.endsWith('index.html')) && (href === '' || href === 'index.html'))
      a.classList.add('active');
  });

  // scroll reveal
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
