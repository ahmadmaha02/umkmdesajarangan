import React, { useState } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import Navbar from "../../components/navbar/navbar"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 70px;
  width: 100%;
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 45px;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
`;  

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;


`;

const SearchInput = styled.input`
  padding: 8px 16px;
  width: 300px;
  border: none;
  color: #1c1c1c;
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    
  }
`;

const SearchButton = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #1bc46e;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 10px;
    width: 70%;
  }
`;


const productsData = [
    {
      id: 1,
      name: "Produk 1",
      price: 100000,
      image:
        "https://example.com/product1.jpg", // Ganti dengan URL gambar produk 1
    },
    {
      id: 2,
      name: "Produk 2",
      price: 150000,
      image:
        "https://example.com/product2.jpg", // Ganti dengan URL gambar produk 2
    },
    {
      id: 3,
      name: "Produk 3",
      price: 80000,
      image:
        "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
    },
    {
        id: 3,
        name: "Produk 3",
        price: 80000,
        image:
          "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
      },
      {
        id: 3,
        name: "Produk 3",
        price: 80000,
        image:
          "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
      },
      {
        id: 3,
        name: "Produk 3",
        price: 80000,
        image:
          "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
      },
      {
        id: 3,
        name: "Produk 3",
        price: 80000,
        image:
          "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
      },
      {
        id: 3,
        name: "Produk 3",
        price: 80000,
        image:
          "https://example.com/product3.jpg", // Ganti dengan URL gambar produk 3
      },
 
  ];
  

  const Product: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any[]>(productsData); // Set the default value to all products
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchClick = () => {
      // Filter products based on the search term when the button is clicked
      const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredProducts);
    };
  
    return (
      <>
        <Navbar />
        <Container>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
          </SearchContainer>
          <PageContainer>
            {searchResults.map((product) => (
              <CardProduct
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </PageContainer>
        </Container>
      </>
    );
  };
  
  export default Product;