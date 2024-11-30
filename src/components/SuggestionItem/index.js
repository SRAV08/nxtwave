// Write your code here
import React from 'react'
import './index.css'

const SuggestionItem = ({suggestion, onClickSuggestion}) => {
  return (
    <div className="suggestion-item" onClick={onClickSuggestion}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
      <p className="suggestion-text">{suggestion}</p>
    </div>
  )
}

export default SuggestionItem
