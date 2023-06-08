import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets/index'
import { GetStarted } from './index'

export default function Hero() {
  return (
    <section
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div
          className={`bg-discount-gradient flex gap-4 rounded-md ${styles.flexCenter} ${styles.paragraph} uppercase py-1 px-4 sm:mb-14 mb-5`}
        >
          <img src={discount} alt="discount" />
          <p>
            <span className="text-white font-bold">20%</span> DISCOUNT FOR{' '}
            <span className="text-white font-bold">1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className={`flex md:gap-14`}>
          <h1
            className={`ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] font-[Poppins] `}
          >
            The Next <br className="sm:block hidden" />
            {''}
            <span className="text-gradient">Generation</span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] font-[Poppins] sm:mb-14 mb-5">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`md:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}
