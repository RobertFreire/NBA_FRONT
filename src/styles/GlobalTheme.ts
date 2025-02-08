import { createGlobalStyle } from 'styled-components';

export type Roundness = 'full' | 'lg' | 'md' | 'sm';
export const getBorderRadius = (roundness: Roundness) => {
  switch (roundness) {
    case 'full':
      return '50%';
    case 'lg':
      return '10rem';
    case 'md':
      return '0.8rem';
    case 'sm':
      return '0.4rem';
    default:
      return '0.8rem'; // default to md
  }
};

export const GlobalTheme = createGlobalStyle`
  :root {
    --primary-blue: #0D2840; 
    --primary-red: #D91136;
    --primary-brown: #BF9460;
    --mid-gray: #F2F2F2;
    --light-gray: #C6C6C6;
    
    
    --dark-gray2: #393939;
    --mid-gray2: #49454F;
    --light-gray2: #B6B6B6;

    --light-gray3: #e7e7e7;
    
    --terciary: #2DB9C5;
    --accent-green: #8BC52D;
    --black: #3D3E40;
    --white: #FFF;
    --light-pink: #F7E5E5;


    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }

  html, body {
    height: 100%;
    background-color: #f0f4f9;
  }

  html {
    scroll-behavior: smooth;
  }
      
  body {
    background: #f0f4f9;
    color: var(--dark-gray2);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    & pre {
      background: var(--white);
      color: var(--dark-gray);
      -webkit-font-smoothing: antialiased;
      font-family: 'Poppins', sans-serif;
    }
  }

  a, button {
    cursor: pointer;
    text-decoration: 0;
    border: none;
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    &:hover {
      filter: brightness(0.9);
    }
    &:disabled {
      opacity: .6;
      cursor: not-allowed;
      &:hover{
        filter: none;
      }   
    }
  }
  input {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    &:disabled {
      opacity: .75;
      cursor: not-allowed;
    }
  }

  @media(max-width: 700px) {
    :root {
      font-size: 56%;
    }
  }

    
  //Removing steps from input number
  //
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
