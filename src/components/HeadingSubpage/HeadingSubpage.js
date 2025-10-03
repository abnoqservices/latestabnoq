'use client'

import React from 'react'
import { notFound } from 'next/navigation'

const formatBoldText = (text) => {
  if (!text) return "";
  const parts = text.split(/(\*[^*]+\*)/g); // split by *...*
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <strong key={index}>{part.slice(1, -1)}</strong>; // remove * and bold
    }
    return part; // normal text
  });
};

const HeadingSubpage = ({ classname, tag, title, desc }) => {
  // If title is "No Title", show 404
  if (title === "No Title") {
    notFound();
  }

  return (
    <div className={`heading-title ${classname}`}>
      <div className="container">
        {tag && (
          <div className='tag-block flex items-center justify-center'>
            <span className='tag text-label'>{tag}</span>
          </div>
        )}
        <div className={`title heading1 text-center capitalize${tag ? ' mt-4' : ''}`}>{title}</div>
        <div className="desc body2 text-center text-surface1 mt-3">{formatBoldText(desc)}</div>
      </div>
    </div>
  )
}

export default HeadingSubpage
