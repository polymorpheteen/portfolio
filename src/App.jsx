import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Connect from './components/Connect'
import FindMe from './components/FindMe'
import './styles/App.css'

export default function App() {
  return (
    <main>
      <div className="main-grid">
        <Header />
        <SectionHeader />
        <Connect />
        <FindMe />
      </div>
    </main>
  )
}
