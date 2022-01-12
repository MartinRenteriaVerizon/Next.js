import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js</title>
      </Head>
      
      <h1>Welcome to the home page!</h1>
      <button><a href='/aboutme'>About Me</a></button>
      <button><a href='/advice'>Advice API Demo</a></button>
      <button><a href='/idleTimer'>Idle Timer</a></button>

    </div>
  )
}
