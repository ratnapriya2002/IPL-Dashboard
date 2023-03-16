/* Write your CSS here */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, cardDetails: []}

  componentDidMount() {
    this.getCardDetails()
  }

  getCardDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const responseObject = await response.json()

    const convertResponseObject = [responseObject].map(item => ({
      teamBannerUrl: item.team_banner_url,
      latestMatchDetails: item.latest_match_details,
      recentMatches: item.recent_matches,
    }))

    this.setState({isLoading: false, cardDetails: convertResponseObject[0]})
  }

  render() {
    const {isLoading, cardDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = cardDetails
    console.log(recentMatches)
    /*
    const convertedRecentMatches = recentMatches.map(item => ({
      id: item.id,
      date: item.date,
      venue: item.venue,
      umpires: item.umpires,
      result: item.result,
      manOfTheMatch: item.man_of_the_match,
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      firstInnings: item.first_innings,
      secondInnings: item.second_innings,
      matchStatus: item.match_status,
    }))
    console.log(convertedRecentMatches)
    */

    return (
      <div className="match-details-container">
        {isLoading ? (
          <div testid="loader" className="loader-spinner">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image-style"
            />
            <p className="para-latest">Latest Matches</p>
            <div>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <ul className="match-list">
              {recentMatches.map(matchItem => (
                <MatchCard matchItem={matchItem} key={matchItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
