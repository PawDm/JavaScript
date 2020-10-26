// function cs2() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//     return c;
//   };
// }

// let d = cs2();
// d();
// let sss = d;

// console.log(sss);

const getUser = async () => {
  try {
    const res = await fetch('https://vk.com');
    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
};
getUser();

console.log('Ура Гитхаб');
