import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from "react"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [date, setDate] = useState("")
  const fetchDate = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    setDate(data.value)
  }
  useEffect(() => {
    fetchDate()
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button onClick={fetchDate}>call</button>
        <button onClick={() => setDate('')}>clear</button>
        <div>{date || "not called"}</div>
      </main>
    </div>
  )
}

export default Home
