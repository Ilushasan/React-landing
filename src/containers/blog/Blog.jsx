import React from 'react'
import styles from './Blog.module.css'
import style from '../../App.module.css'
import { Article } from '../../components'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className={`${styles.gpt3_blog} ${style.sectionPadding}`} id='blog'>
      <div className={styles.gpt3_blog_heading}>
        <h1 className={style.gradientText}>
          A lot is happening, We are blogging about it.   
        </h1>
      </div>
      <div className={styles.gpt3_blog_container}>
        <div className={styles.gpt3_blog_container_groupA}>
          <Article imgUrl={blog1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className={styles.gpt3_blog_container_groupB}>
          <Article imgUrl={blog2} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog3} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog4} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog5} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}


export default Blog