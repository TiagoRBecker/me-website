import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Roboto:wght@400;500;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    
 
    
  }
  body,html{
    font-family: 'Roboto', sans-serif;
    overflow-x:hidden;
   
  }
`;
 
export default GlobalStyle;