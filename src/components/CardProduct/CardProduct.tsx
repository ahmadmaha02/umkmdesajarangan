import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color:#000;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  margin: 4px 0;
`;

const BuyButton = styled.button`
  padding: 8px 16px;
  background-color: #1BC46E;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface Props {
  name: string;
  price: number;
  image: string;
}

const CardProduct: React.FC<Props> = ({ name, price, image }) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>Rp {price.toLocaleString()}</ProductPrice>
      <BuyButton>Beli</BuyButton>
    </CardContainer>
  );
};

export default CardProduct;
