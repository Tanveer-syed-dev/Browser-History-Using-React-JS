// write your code here

import './History.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem/HistoryItem'

class History extends Component {
  state = {inputSearch: '', userBrowserHistory: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({userBrowserHistory: initialHistoryList})
  }

  onChangeUserSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  onDeleteHistory = id => {
    const {userBrowserHistory} = this.state
    const onDeleteHistoryResults = userBrowserHistory.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({userBrowserHistory: onDeleteHistoryResults})
  }

  render() {
    const {inputSearch, userBrowserHistory} = this.state
    console.log(inputSearch)
    const inputUserSearchFilter = userBrowserHistory.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="bro-his-bg-container">
        <header className="header">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-search-box-container">
            <div className="search-box-img-container">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="input-search-el">
              <input
                className="input-search"
                type="search"
                placeholder="Search history"
                value={inputSearch}
                onChange={this.onChangeUserSearch}
              />
            </div>
          </div>
        </header>
        {inputUserSearchFilter.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="browser-history-list-container">
            {inputUserSearchFilter.map(eachItem => (
              <HistoryItem
                key={eachItem.id}
                browserDetails={eachItem}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default History
