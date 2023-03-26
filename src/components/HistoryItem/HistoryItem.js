import './HistoryItem.css'
import {Component} from 'react'

class HistoryItem extends Component {
  render() {
    const {browserDetails, onDeleteHistory} = this.props
    const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

    const onDeleteMyHistory = () => {
      onDeleteHistory(id)
    }

    return (
      <li className="browser-history-details-list">
        <p className="timeAccessed">{timeAccessed}</p>
        <div className="browse-history-container">
          <div className="display-flex">
            <img src={logoUrl} alt="domain logo" className="logoUrl-img" />
            <div className="application-container">
              <p className="application-name">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
          <button
            data-testid="delete"
            type="button"
            onClick={onDeleteMyHistory}
          >
            <img
              className="delete-icon"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button>
        </div>
      </li>
    )
  }
}
export default HistoryItem
