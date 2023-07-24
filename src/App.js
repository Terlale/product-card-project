import React, { useState } from "react";
import data from "./data.json";

const App = () => {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");

  const AddProduct = () => {
    const newProduct = {
      name: name,
      subtitle: subtitle,
      price: price,
    };

    data.products.push(newProduct);

    setName("");
    setSubtitle("");
    setPrice("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          gap: "10px",
          margin: "10px",
        }}
      >
        <input
          type="text"
          style={{
            width: "100%",
            height: "27px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          style={{
            width: "100%",
            height: "27px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <input
          type="number"
          style={{
            width: "100%",
            height: "27px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          style={{
            width: "100%",
            height: "35px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={AddProduct}
        >
          Gönder
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {data.products.map((product) => (
          <div
            key={product.id}
            style={{
              flex: "0 0 30%",
              padding: "10px",
              border: "1px solid grey",
              borderRadius: "6px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.subtitle}</p>
            <h5>{product.price} TL</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
