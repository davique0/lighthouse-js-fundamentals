for (let i = 100; i <= 200; i++) {
  ((i % 3 === 0)  && (i % 4 === 0)) ? console.log('LoopyLighthouse') : i % 3 === 0 ? console.log('Loopy') : i % 4 === 0 ? console.log('Lighthouse') : console.log(i);
}