// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {i: 0}

  onLeft = () => {
    const {i} = this.state
    console.log('left', i)
    if (i !== 0) {
      this.setState({i: i - 1})
    }
  }

  onRight = () => {
    const {i} = this.state
    console.log('right', i)
    const {reviewsList} = this.props
    const l = reviewsList.length
    if (i !== l - 1) {
      this.setState({i: i + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {i} = this.state
    const currentUser = reviewsList[i]
    const {imgUrl, username, companyName, description} = currentUser

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="reviewContainer">
          <button
            type="button"
            className="button"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="itemContainer">
            <img src={imgUrl} alt={username} />
            <p className="userName">{username}</p>
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
