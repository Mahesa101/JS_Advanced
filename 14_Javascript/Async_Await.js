//14. Async Await

const coba = new Promise((resolve, reject) => {
  let waktu = 6000;
  if (waktu < 5000) {
    setTimeout(() => {
      resolve("ok");
    }, waktu);
  } else {
    reject("Kelamaan");
  }
});

console.log(
  coba
    .then(() => {})
    .then(() => console.log(coba))
    .catch(() => console.log(coba)),
);

function cobaPromise() {
  return new Promise((resolve, reject) => {
    let waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("ok");
      }, waktu);
    } else {
      reject("Kelamaan");
    }
  });
}

async function cobaAsync() {
  try {
    const x = await cobaPromise();
    console.log(cobaPromise());
    console.log(x);
  } catch (erro) {
    console.log(erro);
  }
}
cobaAsync();
