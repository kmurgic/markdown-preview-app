import React from 'react';
import './index.css';

const Editor = ({ text, handleChange }) => (
  <div className="window editor-window">
    <div className='window-label'>Edit</div>
    <textarea className="editor-textarea" value={text} onChange={handleChange} />
  </div>
);

export default Editor;