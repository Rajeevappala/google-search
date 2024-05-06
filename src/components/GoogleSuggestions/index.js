// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchEle: '',
  }

  searchTextElement = event => {
    this.setState({searchEle: event.target.value})
  }

  render() {
    const {searchEle} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachEle =>
      eachEle.suggestion.toLowerCase().includes(searchEle.toLowerCase()),
    )
    console.log(searchResult)
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img"
          />
        </div>
        <div className="searchContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-ele"
          />
          <input
            type="search"
            placeholder="Search Google"
            className="search-bar"
            value={searchEle}
            onChange={this.searchTextElement}
          />
        </div>
        <ul>
          {searchResult.map(eachEle => (
            <SuggestionItem id={eachEle.id} searchDetails={eachEle} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
