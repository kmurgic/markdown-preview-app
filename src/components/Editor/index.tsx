import React, { FormEvent } from 'react';
import './index.css';

type EditorProps = {
  text: string,
  handleChange: (e: FormEvent<HTMLTextAreaElement>) => void,
}

const Editor = (props: EditorProps) => {
  const { text, handleChange } = props;
  return (
    <div className="window editor-window">
      <div className='window-label'>Edit</div>
      <textarea className="editor-textarea" value={text} onChange={handleChange} />
    </div>
  );
}

export default Editor;