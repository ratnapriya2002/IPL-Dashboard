import './index.css'

const MatchCard = props => {
  const {matchItem} = props

  const convertMatchItem = [matchItem].map(item => ({
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
  console.log(convertMatchItem)

  const {
    id,
    date,
    venue,
    umpires,
    result,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = convertMatchItem[0]

  return (
    <li className="match-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-logo-style"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
