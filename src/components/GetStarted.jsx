import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets/index'

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} gap-1`}>
          <p className="font-[poppins] text-[18px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            className="w-[23] h-[23] object-contain"
            src={arrowUp}
            alt="arrow-up"
          />
        </div>
        <p>
          <span className="text-gradient font-[poppins] text-[18px] leading-[23px]">
            Started
          </span>
        </p>
      </div>
    </div>
  )
}
