import SectionItem from './SectionItem'
import '../styles/ProjectSection.css'

export default function ProjectSection() {
  const items = [
    {
      title: 'Inventory App',
      description:
        'A simple and intuitive music collection manager that lets users organize their favorite albums in one place.',
    },
    {
      title: 'Members Only',
      description:
        'A simple multi-user platform that allows users to create their own accounts and share messages with other users.',
    },
    {
      title: 'Memory Card',
      description:
        'An interactive web-based game built with React that challenges players to test their memory skills.',
    },
  ]
  return (
    <div className="project-section">
      <h1 className="section-title" data-animate style={{ '--stagger': 2 }}>
        Projects
      </h1>
      <div className="project-items">
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
