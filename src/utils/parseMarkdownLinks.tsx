import Link from 'next/link';
import React from 'react';

/**
 * Parses markdown-style links in text and converts them to Next.js Link components
 * Example: "[Link Text](https://example.com)" becomes a clickable link
 * @param text - The text containing markdown-style links
 * @returns An array of text and Link components
 */
export const parseMarkdownLinks = (text: string) => {
  // Store the parsed parts (text and links) in order
  const parts = [];
  // Keep track of where we left off processing the text
  let lastIndex = 0;
  // Regular expression to match markdown links: [text](url)
  // ([^\]]+) captures any characters except ] for the link text
  // ([^)]+) captures any characters except ) for the URL
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  // Find all markdown links in the text
  while ((match = linkRegex.exec(text)) !== null) {
    // If there's text before the link, add it to parts
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Create a Next.js Link component for the matched link
    // match[1] is the link text, match[2] is the URL
    parts.push(
      <Link
        key={match.index}
        href={match[2]}
        className="inline-block font-geist text-[var(--text-60)] underline decoration-dotted underline-offset-4 hover:text-[var(--text-90)] hover:decoration-[var(--text-90)]"
      >
        {match[1]}
      </Link>
    );

    // Update lastIndex to continue after this link
    lastIndex = match.index + match[0].length;
  }

  // Add any remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // Return array of text and Link components to be rendered
  return parts;
};
