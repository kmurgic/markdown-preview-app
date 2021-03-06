import React, { useState } from 'react';
import ControlledEditor from '../Editor';
import ControlledPreview from '../Preview';
import './index.css';
import defaultText from './defaultText';

const App = () => {
  const [text, setText] = useState(defaultText);
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
      <ControlledEditor
        text={text}
        handleChange={handleTextChange}
      />
      <ControlledPreview text={text} />
    </div>
  );
};

export default App;
