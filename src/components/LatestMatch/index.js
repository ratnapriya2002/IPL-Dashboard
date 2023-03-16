import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const convertLatestMatchDetails = [latestMatchDetails].map(item => ({
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

  const {
    date,
    venue,
    umpires,
    result,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = convertLatestMatchDetails[0]

  return (
    <div className="latest-match-card-container">
      <div className="latest-match-content">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <div className="latest-match-content">
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
