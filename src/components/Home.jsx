import React, { useState } from "react";
import data from "./data.json";

const Home = () => {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAddToBasket = (product) => {
    setSelectedProduct({
      name: product.name,
      price: product.price,
    });
  };

  console.log(selectedProduct);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#ff00f74a",
        }}
      >
        <div>
          <h1 style={{ color: "white" }}>Logo</h1>
        </div>
        <div style={{ gap: "10px", display: "flex" }}>
          <button
            style={{
              color: "white",
              width: "110px",
              height: "45px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#ff00d08c",
            }}
          >
            Sebet
          </button>
          <button
            style={{
              color: "white",
              width: "110px",
              height: "45px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#ff00d08c",
            }}
            onClick={openModal}
          >
            Mehsul elave et
          </button>

          {isModalOpen && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  width: "300px",
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
                    marginBottom: "10px",
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
                    marginBottom: "10px",
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
                    marginBottom: "10px",
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
                  onClick={() => {
                    AddProduct();
                    closeModal();
                  }}
                >
                  Gönder
                </button>
                <button
                  style={{
                    width: "100%",
                    height: "35px",
                    backgroundColor: "red",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={closeModal}
                >
                  İmtina et
                </button>
              </div>
            </div>
          )}
        </div>
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
            <div style={{ textAlign: "right" }}>
              <button
                style={{
                  width: " 110px",
                  height: " 40px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 0, 208, 0.55)",
                  color: "white",
                }}
                onClick={() => {
                  handleAddToBasket(product);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
