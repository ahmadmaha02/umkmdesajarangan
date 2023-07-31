import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 14px;
  width: calc(50% - 32px);
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #000;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 70px;
    height : 70px;
  }

`;

const ProductName = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin: 8px 0;
`;

const ProductPrice = styled.p`
  margin: 4px 0;
  font-size: 12px;
  color: #177618;
`;

const BuyButton = styled.button`
  padding: 8px 16px;
  background-color: #1bc46e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface Props {
  name: string;
  price: number;
  image: string;
  direct: string;
}

const CardProduct: React.FC<Props> = ({ name, price, image,direct }) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>Rp {price.toLocaleString()}</ProductPrice>
      <Link to={direct}>
      <BuyButton>Beli</BuyButton>
      </Link>
    </CardContainer>
  );
};

export default CardProduct;
