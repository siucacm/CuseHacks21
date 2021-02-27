import { useState } from 'react'
import './Rate.css'

export default function Rate() {
  const [rating, setRating] = useState(5)


  return (
    <div className="rating">
      <span className="rating-number">{rating}</span>
      <div className="slider-container">
        <input type="range" min="1" max="10" value={rating} onChange={e => setRating(e.target.value)} />
      </div>
      <button>Submit Rating</button>
    </div>
  )
}