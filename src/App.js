import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CodeInput from "./components/CodeInput";
import ResultDisplay from "./components/ResultDisplay";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <CodeInput setResult={setResult} />
        <ResultDisplay result={result} />
      </div>
    </div>
  );
};

export default App;