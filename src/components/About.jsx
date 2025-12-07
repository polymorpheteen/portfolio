import '../styles/About.css'

export default function About() {
  return (
    <div className="about-me" data-animate style={{ '--stagger': 1 }}>
      <p>
        Hi! My name is Marwa, I'm a recent computer science graduate from{' '}
        <a className="uni-link" href="#">
          Northwestern Polytechnical University
        </a>
        .
      </p>

      <p>
        Coding, reading, and studying are the things that you will see me doing
        most.
      </p>

      <p>
        I am always learning and finding new hobbies, passions, and skills and
        this is my website to talk about, and showcase them all to you!
      </p>
    </div>
  )
}
