import React from 'react'
import { MarkdownPreview } from 'react-marked-markdown';
import './index.css';

const Preview = ({ text }) => (
  <div className="window preview-window">
    <div className='window-label'>Preview</div>
    <MarkdownPreview className='preview-display' value={text} markedOptions={{ tables: true, breaks: true }} />
  </div>
)

export default Preview;