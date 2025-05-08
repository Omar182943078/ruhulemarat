
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

const map = L.map('uae-map').setView([24.4667,54.3667],7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
const emirates = [
  {name:"أبوظبي",coords:[24.4539,54.3773]},
  {name:"دبي",coords:[25.276987,55.296249]},
  {name:"الشارقة",coords:[25.3463,55.4209]},
  {name:"عجمان",coords:[25.4052,55.5136]},
  {name:"أم القيوين",coords:[25.5600,55.5552]},
  {name:"رأس الخيمة",coords:[25.8007,55.9762]},
  {name:"الفجيرة",coords:[25.1288,56.3265]}
];
emirates.forEach(em=>L.marker(em.coords).addTo(map).bindPopup(`<b>${em.name}</b>`));
