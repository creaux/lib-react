import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkdownProps {
  children: string;
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ children }) => (
  <ReactMarkdown source={children} />
);
