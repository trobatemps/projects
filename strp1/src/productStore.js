const productsArray = [
  {
    id: "price_1TLjMLJ4XJhGWuQEYLOYLxQJ",
    title: "Sp1",
    price: 10.0,
  },
  {
    id: "price_1TLjPmJ4XJhGWuQEzXqUcnl7",
    title: "Sp2",
    price: 10.0,
  },
  {
    id: "price_1TLjQRJ4XJhGWuQEhrG4IUtP",
    title: "Sp3",
    price: 15.0,
  },
  {
    id: "price_1TLk4AJ4XJhGWuQEzSPRRVFU",
    title: "Sp4",
    price: 16.0,
  },
  {
    id: "price_1TLk50J4XJhGWuQE7IgyBQFU",
    title: "Sp5",
    price: 20.0,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product has not been found for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
