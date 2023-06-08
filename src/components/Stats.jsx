import React from 'react'
import styles from '../style'
import { stats } from '../constants'

export default function Stats() {
  return (
    <section className={`${styles.flexCenter} text-white gap-3 flex-wrap`}>
      {stats.map(({ title, value }) => {
        return (
          <div
            className={`${styles.flexCenter} gap-6 flex-1 justify-start items-center w-full stat-decoration`}
          >
            <p className="font-poppins font-semibold text-[30px] xs:leading-[53px] leading-[43px]">
              {value}
            </p>
            <h4 className="font-poppins text-[20px] text-gradient uppercase xs:leading-[26px] leading-[21px]">
              {title}
            </h4>
          </div>
        )
      })}
    </section>
  )
}
