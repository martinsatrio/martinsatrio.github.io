(function(){const r=document.documentElement,s=localStorage.getItem('theme');if(s==='light')r.classList.add('light');
function setActive(){const c=document.body.dataset.page;document.querySelectorAll('.links a').forEach(a=>{const t=a.getAttribute('href').replace('./','').replace('/','');if(t&&c&&t.startsWith(c))a.classList.add('active');});}
function toggle(){const l=r.classList.toggle('light');localStorage.setItem('theme',l?'light':'dark');}
window.addEventListener('DOMContentLoaded',()=>{setActive();const b=document.getElementById('theme-toggle');if(b)b.addEventListener('click',toggle);});})();
