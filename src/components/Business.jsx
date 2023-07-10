import React from 'react'
import { features } from '../constants/index'
import styles, { layout } from '../style'
import { Button } from './index'

const FeatureCard = ({ content, icon, title }) => {
  return (
    <div className={`flex items-center justify-between gap-4  w-full pl-12`}>
      <div className={`${styles.flexCenter}`}>
        <img className="w-[32px] h-[32px]" src={icon} alt="feature-icon" />
      </div>
      <div className={`${styles.paragraph}  flex-1`}>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-[16px]">{content}</p>
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <section id="features" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} flex-col gap-9`}>
        {features.map(({ id, content, icon, title }) => {
          return (
            <FeatureCard key={id} content={content} icon={icon} title={title} />
          )
        })}
      </div>
    </section>
  )
}
