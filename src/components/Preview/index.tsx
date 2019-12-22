import React from 'react'
import { MarkdownPreview } from 'react-marked-markdown';
import './index.css';
import { string } from 'prop-types';

type PreviewProps = {
  text: string,
}

const Preview = ({ text }: PreviewProps) => (
  <div className="window preview-window">
    <div className='window-label'>Preview</div>
    <MarkdownPreview
      className='preview-display'
      value={text}
      markedOptions={{ tables: true, breaks: true }}
    />
  </div>
);

export default Preview;