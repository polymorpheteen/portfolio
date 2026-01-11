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
        <p className="location-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </g>
          </svg>
          <span>Agadir, Morocco</span>
        </p>
      </div>
    </div>
  )
}
