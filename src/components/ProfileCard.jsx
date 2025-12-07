import profile from '../assets/pfp.jpg'
import '../styles/ProfileCard.css'

export default function ProfileCard() {
  return (
    <div className="info-card">
      <img
        src={profile}
        alt="Profile Picture"
        className="profile-picture"
        data-animate
        style={{ '--stagger': 1 }}
      />
      <div className="profile-info">
        <h2 data-animate style={{ '--stagger': 1 }}>
          Marwa Lachgar
        </h2>
        <p data-animate style={{ '--stagger': 2 }}>
          Fullstack Engineer
        </p>
      </div>
    </div>
  )
}
