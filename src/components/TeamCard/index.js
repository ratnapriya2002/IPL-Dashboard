// Write your code here
// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardItem} = props
  const {id, name, teamImageUrl} = cardItem
  return (
    <Link to={`/team-matches/${id}`} className="card-link">
      <li className="link-list-item">
        <img src={teamImageUrl} alt={name} className="card-logo-style" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
