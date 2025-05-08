import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import axios from "axios";

const CodeInput = ({ setResult }) => {
  const [code, setCode] = useState("");
  const [endpoint, setEndpoint] = useState("suggest");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request to:", `https://personal-coding-assistant-api.onrender.com/${endpoint}`);
      console.log("Request body:", { code });
  
      const response = await axios.post(
        `https://personal-coding-assistant-api.onrender.com/${endpoint}`,
        { code },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "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", // Replace with your actual API key
          },
        }
      );
  
      console.log("Response received:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("Error occurred:", error.response || error.message);
      setResult({ error: error.response?.data?.detail || "An error occurred" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <TextField
        label="Enter your code"
        multiline
        rows={8}
        fullWidth
        variant="outlined"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <InputLabel>Choose an Action</InputLabel>
        <Select value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
          <MenuItem value="suggest">Suggest Code</MenuItem>
          <MenuItem value="explain">Explain Code</MenuItem>
          <MenuItem value="detect">Detect Errors</MenuItem>
          <MenuItem value="refactor">Refactor Code</MenuItem>
          <MenuItem value="learn">Learn Code</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default CodeInput;