import '../styles/SectionItem.css'

export default function SectionItem({ title, description }) {
  return (
    <div className="section-item">
      <h2 data-animate style={{ '--stagger': 3 }}>
        <a href="#" className="section-link">
          {title}
        </a>
      </h2>
      <p data-animate style={{ '--stagger': 3 }}>
        {description}
      </p>
    </div>
  )
}
