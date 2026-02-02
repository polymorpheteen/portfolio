import SectionItem from './SectionItem'
import '../styles/ProjectSection.css'

export default function ProjectSection() {
  const items = [
    {
      id: 'inventory-app',
      title: 'Inventory App',
      description:
        'A simple and intuitive music collection manager that lets users organize their favorite albums in one place.',
      link: 'https://github.com/polymorpheteen/inventory-application',
    },
    {
      id: 'members-only',
      title: 'Members Only',
      description:
        'A simple multi-user platform that allows users to create their own accounts and share messages with other users.',
      link: 'https://github.com/polymorpheteen/members-only',
    },
    {
      id: 'file-uploader',
      title: 'File Uploader',
      description:
        'A full-stack web application that allows users to upload, store, and manage their files securely.',
      link: 'https://github.com/polymorpheteen/file-uploader',
    },
  ]
  return (
    <section className="project-section">
      <h1 className="section-title" data-animate style={{ '--stagger': 2 }}>
        Projects
      </h1>
      <div className="project-items">
        {items.map((item) => (
          <SectionItem
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  )
}
