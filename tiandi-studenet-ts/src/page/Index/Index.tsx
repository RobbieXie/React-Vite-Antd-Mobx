import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function Index() {
  const readmePath = '@/../readme.md';
  const [markdown, setMarkdown] = useState('');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(readmePath)
    .then(response => response.text())
    .then(text => setMarkdown(text));
  });

  return <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
}