import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncreaseBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="white-container">
          <h1 className="heading">
            Bob ate <span className="eat-number">{mango}</span> mangoes{' '}
            <span className="eat-number">{banana}</span> bananas
          </h1>
          <div className="fruits-cart-container">
            <div className="fruits-cart">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onIncreaseMango}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-cart">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onIncreaseBanana}
                className="button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
