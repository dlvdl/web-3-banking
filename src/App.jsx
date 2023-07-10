import { useState } from 'react'
import styles from './style'
import { Header, Hero, Stats, Business } from './components/index'

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Header />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
        </div>
      </div>
    </div>
  )
}

export default App
