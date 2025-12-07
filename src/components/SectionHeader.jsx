import ProjectSection from './ProjectSection'
import WritingSection from './WritingSection'
import '../styles/SectionHeader.css'

export default function SectionHeader() {
  return (
    <div className="section-header">
      <ProjectSection />
      <WritingSection />
    </div>
  )
}
