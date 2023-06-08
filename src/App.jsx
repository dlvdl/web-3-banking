import { useState } from 'react'
import styles from './style'
import { Header, Hero, Stats } from './components/index'

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

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Stats />
        </div>
      </div>
    </div>
  )
}

export default App
