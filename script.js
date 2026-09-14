const data={
  raito:{title:'RaitoControl — interfaces & fonctionnalités',label:'PROJET 01 · DESKTOP',imgs:[451,452,453,454,455,457,458,459,460,461,462,463].map(n=>({src:`assets/raito/${n}.jpg`,cap:`Capture ${n}`}))},
  ville:{title:'Ville Propre — plateforme web',label:'PROJET 02 · WEB',imgs:[466,467,468,469,470,471,472,473,474,475,477].map(n=>({src:`assets/villepropre/${n}.jpg`,cap:`Capture ${n}`}))}
};
const modal=document.getElementById('galleryModal'),grid=document.getElementById('galleryGrid');
document.querySelectorAll('[data-gallery]').forEach(btn=>btn.addEventListener('click',()=>openGallery(btn.dataset.gallery)));
function openGallery(key){const d=data[key];document.getElementById('galleryLabel').textContent=d.label;document.getElementById('galleryTitle').textContent=d.title;grid.innerHTML=d.imgs.map(x=>`<figure><img src="${x.src}" alt="${x.cap}"><figcaption>${x.cap}</figcaption></figure>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')}
function closeGallery(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}
document.querySelector('.close').addEventListener('click',closeGallery);modal.addEventListener('click',e=>{if(e.target===modal)closeGallery()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGallery()});
document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.right='5vw';nav.style.top='70px';nav.style.flexDirection='column';nav.style.background='#fff';nav.style.padding='18px';nav.style.borderRadius='15px';nav.style.boxShadow='0 15px 35px rgba(0,0,0,.12)'})
