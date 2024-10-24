import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);

  const { data: items } = useFetch(url)
  

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name: name,
      price: price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])

    setName("")
    setPrice("")
  };

  return (
    <>
      <div className="app">
        <h1>Lista de produtos</h1>
        <ul>
          {items && items.map((item) => (
            <li key={item.id}>
              {item.name} - R$: {item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  );
}

export default App;
