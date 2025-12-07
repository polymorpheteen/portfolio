import SectionItem from './SectionItem'
import '../styles/ProjectSection.css'

export default function ProjectSection() {
  const items = [
    { title: 'Project A', description: 'Short desc' },
    { title: 'Project B', description: 'Longer description goes here' },
    { title: 'Project C', description: 'Another one' },
  ]
  return (
    <div className="column">
      <h1 className="section-title" data-animate style={{ '--stagger': 2 }}>
        Projects
      </h1>
      <div className="items">
        {items.map((item, index) => (
          <SectionItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
