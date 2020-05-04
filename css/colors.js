import css from 'styled-jsx/css';

const style = css.global`
  :root {
    --link-color: #16242f;
    --link-highlight: yellow;
    --meta-text-color: #4f4f4f;
  }
  ::selection {
    background-color: #0070f3;
    color: #fff;
  }
`;

export default style;
