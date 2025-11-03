const meta = await fetch('/_metadata.json').then(r => r.json());
//const banner = meta.bannerImage;
//document.querySelector('.hero').innerHTML = `<img src="/media/${banner}" alt="${meta.title}">`;
console.log(meta);
