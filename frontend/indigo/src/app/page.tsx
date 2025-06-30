export const dynamic = "force-dynamic";

import React from "react";
import { getApiBaseUrl } from "./lib/api";
import About from "./components/About";
import Designs from "./components/Designs";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

async function fetchProducts(): Promise<Product[]> {
  const baseUrl = await getApiBaseUrl();
  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const products = await fetchProducts();
  console.log(products); // Vérifie les objets Strapi

  return (
    <main>
      <About />
      <Designs />
      
      <Products />
      <Shop />
      <Footer />
      {/* <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price} €</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
