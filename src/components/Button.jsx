import React from 'react'
import styles from '../style'

export default function Button() {
  return (
    <div className={`${styles.flexCenter} rounded-[10px] bg-blue-gradient`}>
      <a
        className="px-6 py-4 font-poppins font-medium text-18px text-primary"
        href="#"
      >
        Get Started
      </a>
    </div>
  )
}
