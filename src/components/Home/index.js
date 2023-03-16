import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamCards: []}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const responseFromDB = await response.json()
    const convertedResponse = responseFromDB.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    console.log(convertedResponse)

    this.setState({teamCards: convertedResponse, isLoading: false})
  }

  render() {
    const {teamCards, isLoading} = this.state

    return (
      <div className="dashboard-home-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-style"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div className="loader-spinner">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="cards-list-container">
              {teamCards.map(card => (
                <TeamCard cardItem={card} key={card.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
