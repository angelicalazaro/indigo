import React from "react";
import { API_BASE_URL } from "./lib/api";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.data;
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
