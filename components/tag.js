const Tag = ({ date, color, children }) => (
  <span className={color ? `container ${color}` : 'container'}>
    {date ? <img src='icon-calendar.svg' alt='Calendar icon' /> : ''}
    {children}
    <style jsx>{`
      .container {
        color: #5b5b5b;
        border: 1px gray solid;
        border-radius: 5px;
        width: fit-content;
        margin-right: 10px;
        // margin-top: 5px;
        padding: 1px 7px;

        display: inline-flex;
        align-items: center;
        white-space: nowrap;

        font-weight: 500;
      }

      .blue {
        background-color: #e9f7ff;
        border-color: #e9f7ff;
        color: #252c34;
      }

      img {
        width: 28px;
        padding-right: 10px;
      }
    `}</style>
  </span>
);

export default Tag;
