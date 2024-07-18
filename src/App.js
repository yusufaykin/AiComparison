import React, { useState } from 'react';
import './App.css';
import sendMsgToGPT from './config/gpt';
import sendMsgToGemini from './config/gemini';
import sendMsgToClaude from './config/claude';

function App() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState({
    gptData: null,
    geminiData: null,
    claudeData: null
  });

  const handleSubmit = async () => {
    try {
      const [gptResponse, geminiResponse, claudeResponse] = await Promise.all([
        sendMsgToGPT(prompt),
        sendMsgToGemini(prompt),
        sendMsgToClaude(prompt)
      ]);

      setResponses({
        gptData: gptResponse,
        geminiData: geminiResponse,
        claudeData: claudeResponse
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yapay Zeka Karşılaştırması</h1>
        <div className="prompt-container">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Prompt giriniz..."
            className="prompt-input"
          />
          <button onClick={handleSubmit} className="send-button">Gönder</button>
        </div>
        <div className="results">
          <div className="result-table">
            <h2>GPT-3.5</h2>
            <p>{responses.gptData}</p>
          </div>
          <div className="result-table">
            <h2>Gemini-3.5</h2>
            <p>{responses.geminiData}</p>
          </div>
          <div className="result-table">
            <h2>Claude-3.5</h2>
            <p>{responses.claudeData}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
