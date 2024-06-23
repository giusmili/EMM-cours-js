(() => {
  const content = "Bonjour ici c'est javascript et toi t'es qui?";
  let result = content.split(" ");
  console.table(result);

  /* table */

  const lang = ["html", "css", true];
  console.table(lang);
  console.log(lang.length);

  lang.map(index => {
    console.log(index);
  });

  for (let data in lang) {
    console.log(`${data} : ${lang[data]}`);
  }

  const User = {
    nom: "Doe",
    prenom: "John",
    ville: "NY",
    pays: "USA"
  };
  console.table(User);
  console.log(Object.keys(User), Object.values(User));

  for (let rows in User) {
    console.log(`${rows} : ${User[rows]}`);
  }

  /* tableau multidimensionnel */
  const product = [{ name: "car", price: 6000 }, { name: "Bike", price: 150 }, { name: "phone", price: 700 }, { name: "Watch", price: 200 }, { name: "pen", price: 8 }, { name: "bag", price: 50 }];
  console.table(product);

  const res = product.filter(row => row.price > 8); /* méthodes : find, map et filter */
  console.table(res);
})();