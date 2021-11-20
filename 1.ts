// first Block
setTimeout(() => {
  console.log(1);
});

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(true).then(() => {
  console.log(3);
});

Promise.resolve(true).then(() => {
  console.log(4);
});

console.log(5);
console.log(6);

// second Block

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  ((n) => {
    setTimeout(() => {
      console.log(n);
    }, 1000);
  })(i);
}

// third block
function* generator(number) {
  yield number;
  yield (number += 10);
  yield (number += 10);
}

const gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// fourth block

const person = { name: 'Durand Neto' };
const { name: durand } = person;
console.log(name);
