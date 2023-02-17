import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter';
  
  }

  :root{
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  --grey-4:#121214;
  --grey-3:#212529;
  --grey-2:#343B41;
  --grey-1:#868E96;
  --grey-0:#F8F9FA;

  --sucess-color:#3FE864;
  --error-color: #E83F5B;

  }
body{
  background-color: var(--grey-4);
}
`;
