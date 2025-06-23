// frontend/indigo/src/app/page.tsx

import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:1337/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await res.json();
  return json.data;
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price} €</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
