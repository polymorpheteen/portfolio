import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import Connect from './components/Connect'
import FindMe from './components/FindMe'
import Footer from './components/Footer'
import './styles/App.css'

export default function App() {
  return (
    <>
      <main>
        <div className="main-grid">
          <Header />
          <ProjectSection />
          <Connect />
          <FindMe />
        </div>
      </main>
      <Footer />
    </>
  )
}
