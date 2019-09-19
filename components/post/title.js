export default ({ children }) => (
    <h1>
      <a href="#">{ children }</a>
      <style jsx>{`
        h1 {
          font: 24px Roboto;
          font-weight: 500;
          margin-bottom: 10px;
        }
        a {
          font: 24px Roboto;
          color: #000000;
          text-decoration: none;
        }
      `}</style>
    </h1>
  )