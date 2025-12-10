import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Connect from './components/Connect'
import './styles/App.css'

export default function App() {
  return (
    <main>
      <div className="main-grid">
        <Header />
        <SectionHeader />
        <Connect />
      </div>
    </main>
  )
}
