import profile from '../assets/pfp.jpg'
import '../styles/ProfileCard.css'

export default function ProfileCard() {
  return (
    <div className="info-card">
      <img src={profile} alt="Profile Picture" className="profile-picture" />
      <div className="profile-info">
        <h2>Marwa Lachgar</h2>
        <p>Fullstack Engineer</p>
      </div>
    </div>
  )
}
