// Write your code here
import {useState} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

const GoogleSuggestions = ({suggestionsList}) => {
  const [searchInput, setSearchInput] = useState('')

  // Function to handle search input changes
  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  // Filter suggestions based on search input
  const filteredSuggestions = suggestionsList.filter(suggestion =>
    suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="google-search-container">
      <div className="google-search-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="text"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
            placeholder="Search Google or type a URL"
          />
        </div>
      </div>
      <div className="suggestions-container">
        {filteredSuggestions.map(suggestion => (
          <SuggestionItem
            key={suggestion.id}
            suggestion={suggestion.suggestion}
            onClickSuggestion={() => setSearchInput(suggestion.suggestion)}
          />
        ))}
      </div>
    </div>
  )
}

export default GoogleSuggestions
