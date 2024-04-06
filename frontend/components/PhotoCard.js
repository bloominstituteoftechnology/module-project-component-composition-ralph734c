import React from "react";

export default function PhotoCard({ title, description, imageHdurl, date }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <div>
          <img src={imageHdurl} />
          <details>
            <summary>{title} Photo Explanation</summary>
            <p>This photo was taken on {date}</p>
            <p>{description}</p>
          </details>
        </div>
      </div>
    );
  }