import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardProduct from "../../components/CardProduct/CardProduct";
import Navbar from "../../components/navbar/navbar";
import { productsData } from "./data";

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
  position: absolute;
  top: 60px;
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

const Product: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>(productsData); // Set the default value to all products

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Trim the search term to remove leading and trailing spaces
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    // Filter products based on the trimmed search term
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(trimmedSearchTerm)
    );

    setSearchResults(filteredProducts);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  useEffect(() => {
    // Add event listener for "Enter" key press
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleSearchClick, searchTerm]); // Adding handleSearchClick and searchTerm as dependencies

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
              direct={product.direct}
            />
          ))}
        </PageContainer>
      </Container>
    </>
  );
};

export default Product;
