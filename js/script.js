document.addEventListener('DOMContentLoaded',function(){
  // set year
  const y=document.getElementById('year');if(y) y.textContent=new Date().getFullYear();

  // mobile nav toggle
  const btn=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  if(btn&&links){
    btn.addEventListener('click',()=>{const open=links.style.display==='flex';links.style.display=open?'none':'flex'});
  }

  // smooth scroll for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  })
});
