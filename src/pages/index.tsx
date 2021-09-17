import Head from 'next/head'
import { SubscribeButton } from './Components/SubscribeButton'
import styles from './home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home Ig.News</title>
      </Head>
      <main className={styles.contentConteinner}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            get access to all publications <br />
            <span />
            for $9,90 month
            <span />
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Gril Coding" />
      </main>
    </>
  )
}
