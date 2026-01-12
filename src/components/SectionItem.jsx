import '../styles/SectionItem.css'

export default function SectionItem({ title, description, link }) {
  return (
    <article className="section-item">
      <h2 data-animate style={{ '--stagger': 3 }}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="section-link"
          aria-label={`View ${title} project`}
        >
          {title}
        </a>
      </h2>
      <p data-animate style={{ '--stagger': 3 }}>
        {description}
      </p>
    </article>
  )
}
