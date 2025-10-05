export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Greentree Practical Assessment</h1>
      <p>This is your live project homepage.</p>
      <p>GitHub Repository: <a href='https://github.com/ritikavermaai2023-sys/greentree-practical-assessment' target='_blank' rel='noopener noreferrer'>Click Here</a></p>
      <p>Powered by Next.js & Vercel</p>
      <nav style={{ marginTop: '30px' }}>
        <a href='/about' style={{ marginRight: '15px' }}>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </div>
  )
}
