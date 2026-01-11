import '../styles/Socials.css'

export default function Socials() {
  return (
    <div className="socials-section" data-animate style={{ '--stagger': 3 }}>
      <span>
        <a
          href="https://github.com/polymorpheteen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.996 1.771a10.486 10.486 0 0 0-3.314 20.438c.523.092.69-.216.69-.493c0-.25.005-.945 0-1.824c-2.919.633-3.522-1.381-3.522-1.381a2.78 2.78 0 0 0-1.163-1.534c-.952-.65.071-.638.071-.638a2.2 2.2 0 0 1 1.607 1.08a2.23 2.23 0 0 0 3.05.871c.05-.53.285-1.025.666-1.397c-2.328-.266-4.776-1.165-4.776-5.184a4.06 4.06 0 0 1 1.08-2.815a3.76 3.76 0 0 1 .103-2.774s.882-.282 2.883 1.076a9.9 9.9 0 0 1 5.252 0c2.007-1.357 2.881-1.076 2.881-1.076c.387.878.424 1.87.104 2.774a4.05 4.05 0 0 1 1.079 2.816c0 4.03-2.452 4.916-4.789 5.174a2.5 2.5 0 0 1 .718 1.933v2.904c0 .28.17.59.702.488a10.487 10.487 0 0 0-3.322-20.438"
              stroke-width="1"
            />
          </svg>{' '}
          <p>Github</p>
        </a>
      </span>

      <span>
        <a
          href="https://www.linkedin.com/in/marwa-l-622817288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46" />
          </svg>
          <p>LinkedIn</p>
        </a>
      </span>

      <span>
        <a href="mailto:marwalala18@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m4.2 5.2l7.56 5.67a.4.4 0 0 0 .48 0L19.8 5.2zm16.6.75l-7.84 5.88a1.6 1.6 0 0 1-1.92 0L3.2 5.95V18.8h17.6zM3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
            />
          </svg>{' '}
          <p>Mail</p>
        </a>
      </span>
    </div>
  )
}
