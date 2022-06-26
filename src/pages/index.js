import * as React from "react";
import {useState, useEffect} from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout'
import Seo from '../components/seo'
import App from '../components/app'
import Post from '../components/post'

import * as styles from '../styles/index.module.scss'

import Box from '../images/unchecked.svg'
import Checkbox from '../images/checked.svg'
import PlusSign from '../images/plus-sign.svg'

const IndexPage = ({data}) => {
  const sortedData = data.allContentfulEntry.edges.sort(function(a, b) {
      if (a.node.date && b.node.date) {
        return new Date(b.node.date) - new Date(a.node.date)
      }
      return 0
    });

  const [checkedAll, setCheckedAll] = useState(true);
  const [filters, setFilters] = useState([true, true, true]);
  const [entryAmount, setAmount] = useState(6);
  const [entriesData, setEntries] = useState(sortedData.slice(0,6));
  const categories = ["Feature", "Projects", "News"];

  const handleChangeAll = () => {
    if(checkedAll){
      setCheckedAll(false)
      setFilters([false, false, false])
    } else{ 
      setCheckedAll(true)
      setFilters([true, true, true])
    }
  }

  const handleChange = (position) => {
    const updatedCheckedState = filters.map((item, index) => {
      if (checkedAll) {
        return index !== position ? !item : item
      }
      return index === position ? !item : item
    });
      
    setCheckedAll(false)
    setFilters(updatedCheckedState);
  }
  
  useEffect(()=> {
    var res = [];
    if(!checkedAll) {
      filters.forEach((filter, index)=> filter? res.push(categories[index]):null)
      const found = sortedData.filter(entry => res.includes(entry.node.internal.type.replace("Contentful", "")))
      setEntries(found.slice(0,entryAmount));
    } else{
      setEntries(sortedData.slice(0,entryAmount))
    }
    
  }, [filters,entryAmount])

  const ViewMore = () => {
    if (sortedData.length >= entryAmount) {
      setAmount(entryAmount+3);
    }
  }

  return (
    <Layout>
      <Seo />
      <section className={styles.content}>
        <nav className={styles.leftNav}>
          <ul className={styles.sidebar}>
            <li className={styles.listItem} onClick={()=>handleChangeAll()}>
              <span>{
                checkedAll ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.filterItem}>All</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(0)}>
              <span>{
                (filters[0] && checkedAll === false) ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.filterItem}>Feature</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(1)}>
              <span>{
                (filters[1] && checkedAll === false) ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.filterItem}>Projects</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(2)}>
              <span>{
                (filters[2] && checkedAll === false) ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.filterItem}>News</span>
            </li>
          </ul>
        </nav>
        <div>

        <div className={styles.posts}>
          {entriesData.map(entry => (
          <Post article={entry} />
          ))}
        </div>
        { data.allContentfulEntry.edges.length >= entryAmount && entriesData.length >= entryAmount  ?
        
        <button className={styles.viewMore} onClick={() => ViewMore()}>
          <h3>View More</h3>
          <div className={styles.plus}><PlusSign /></div>
        </button>
        :null }
        </div>
      </section>
      <section className={styles.main}>
        <App />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulEntry {
      edges {
        node {
          ... on ContentfulNews {
            id
            slug
            title
            date(formatString: "YYYY-MM-DD")
            internal {
              type
            }
            image {
              gatsbyImageData
            }
          }
          ... on ContentfulProjects {
            id
            slug
            title
            internal {
              type
            }
            summary {
              summary
            }
            image {
              gatsbyImageData
            }
          }
          ... on ContentfulFeature {
            id
            title
            slug
            date(formatString: "YYYY-MM-DD")
            summary {
              summary
            }
            image {
              gatsbyImageData
            }
            internal {
              type
            }
          }
        }
      }
    }
  }
`

export default IndexPage
