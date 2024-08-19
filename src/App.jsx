import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './App.css';
import { HeaderComp } from './config/dummyData';

function App() {
  const [component, setComponent] = useState(HeaderComp);
  const [cssCode, setCssCode] = useState(component.css);

  return (
    <div className="App">
      {/* Code Editor and Live Preview */}
      <LiveProvider code={component.jsx} scope={{ React }}>
        <div style={{ display: 'flex', gap: "5rem" }}>
          <div>
            <div className="live-editor">
              <h2>JSX Code</h2>
              <LiveEditor />
            </div>
            {/* Editable CSS Code */}
            <div className="css-editor">
              <h2>CSS Code</h2>
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="css-textarea"
              />
            </div>
          </div>

          <div>

            <h2>Live Preview</h2>
            <div className="live-preview-container">
              <style>{cssCode}</style>
              <LivePreview />
            </div>
            <LiveError />
            {/* Copy-to-Clipboard Functionality */}
            <div style={{marginTop:"2rem"}}>

            <button
              onClick={() => {
                navigator.clipboard.writeText(component.jsx);
                alert('JSX code copied to clipboard!');
              }}
              style={{marginRight: '10px'}}
            >
              Copy JSX to Clipboard
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(cssCode);
                alert('CSS code copied to clipboard!');
              }}
            >
              Copy CSS to Clipboard
            </button>
            </div>
          </div>
        </div>

      </LiveProvider>



    </div>
  );
}

export default App;
