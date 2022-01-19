import Head from 'next/head'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Next.js</title>
      </Head>
      
      <h1>Welcome to the home page!</h1>
      <button><a href='/aboutme'>About Me</a></button>
      <button><a href='/advice'>Advice API Demo</a></button>
      <button><a href='/idleTimer'>Idle Timer</a></button>
      <button><a href='/countButton'>CountButton</a></button>
      <button><a href='/searchBar'>SearchBar</a></button>
      <button><a href="/intentToLeave">Back Alert</a></button>
    </div>
  )
}
