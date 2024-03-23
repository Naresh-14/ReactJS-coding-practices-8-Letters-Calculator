import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeCalculateLetter = event => {
    const letterCount = event.target.value
    this.setState({count: letterCount.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="letter-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
          <div className="sub-container">
            <h1 className="name">Calculate the Letters you enter</h1>
            <div className="input-content-card">
              <label htmlFor="cal-input" className="input-name">
                Enter the phrase
              </label>
              <input
                id="cal-input"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChangeCalculateLetter}
                className="calculate-input"
              />
            </div>
            <p className="count">No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
