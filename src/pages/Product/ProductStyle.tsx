import { createGlobalStyle } from "styled-components";

const ProductStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

  }

  /* Media query untuk menampilkan 6 produk di layar PC */
  @media (min-width: 768px) {
    body {
      background-color: #f5f5f5;
    }
  }

  /* Media query untuk menampilkan 2 produk di layar HP */
  @media (max-width: 767px) {
    body {
      background-color: #fff;
    }
  }
`;

export default ProductStyle;