import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div style={{ margin: "20px", maxHeight: "400px", overflowY: "auto" }}>
      <h3>Result:</h3>
      {result.suggestion && (
        <>
          <h4>Suggestion:</h4>
          <SyntaxHighlighter language="python" style={materialDark}>
            {result.suggestion}
          </SyntaxHighlighter>
        </>
      )}
      {result.explanation && (
        <>
          <h4>Explanation:</h4>
          <p>{result.explanation}</p>
        </>
      )}
      {result.errors && (
        <>
          <h4>Errors:</h4>
          <pre>{result.errors}</pre>
        </>
      )}
      {result.refactored_code && (
        <>
          <h4>Refactored Code:</h4>
          <SyntaxHighlighter language="python" style={materialDark}>
            {result.refactored_code}
          </SyntaxHighlighter>
        </>
      )}
      {result.tips && (
        <>
          <h4>Tips:</h4>
          <p>{result.tips}</p>
        </>
      )}
      {!result.suggestion &&
        !result.explanation &&
        !result.errors &&
        !result.refactored_code &&
        !result.tips && (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
    </div>
  );
};

export default ResultDisplay;