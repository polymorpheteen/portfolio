import SectionItem from './SectionItem'
import '../styles/WritingSection.css'

export default function WritingSection() {
  const items = [
    { title: 'Project A', description: 'Short desc' },
    { title: 'Project B', description: 'Longer description goes here' },
  ]
  return (
    <div className="column">
      <h1 className="section-title" data-animate style={{ '--stagger': 2 }}>
        Writing
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
