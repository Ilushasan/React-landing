import React from 'react'
import styles from './Feature.module.css'
import stylewhpt from '../../containers/whatGPT3/WhatGPT3.module.css'

const Feature = ({title, text}) => {
  return (
    <div className={`${stylewhpt.gpt3_whatgpt3_features_container_feature} ${styles.gpt3_features_container_feature}`}>
      <div className={styles.gpt3_features_container_title}>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className={`${stylewhpt.gpt3_whatgpt3_features_container_feature_text} ${styles.gpt3_features_container_feature_text}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature