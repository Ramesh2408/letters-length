// Write your code here.
import './index.css'
import {Component} from 'react'
class letterCalculator extends Component {
  state = {inputphrase: ''}
  letterbutton = event => {
    const {value} = event.target
    this.setState({inputphrase: value})
  }

  render() {
    const {inputphrase} = this.state
    return (
      <div className="letter-container">
        <div className="container">
          <h1 className="heading"> Calculate the Letters you enter </h1>
          <label className="para" htmlFor="phrasetext">
            {' '}
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-search"
            placeholder="Enter the phrase"
            alt="letters calculator"
            id="phrasetext"
            value={inputphrase}
            onChange={this.letterbutton}
          />
        </div>
        <br />
        <p className="button">No.of letters: {inputphrase.length}</p>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default letterCalculator
