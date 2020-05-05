export default ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        line-height: 1.5;
        margin: 20px 0;
        font-size: 16px;
      }
    `}</style>
  </p>
);
