import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Snippet = ({ lineNumbers = true, language = 'plaintext', children }) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={lineNumbers}
      lineNumberProps={() => {
        return { style: { color: '#d1d5db' } };
      }}
      wrapLines={true}
      customStyle={{
        fontSize: `14px`,
        padding: `5px 0px 5px 5px`,
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: `1px solid #d1d5db`,
        width: '100%',
      }}
      language={language}
      style={github}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Snippet;
