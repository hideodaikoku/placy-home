import * as React from "react";
import {useState, useEffect} from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout'
import Seo from '../components/seo'
import App from '../components/app'
import * as styles from '../styles/index.module.scss'
import Box from '../images/unchecked.svg'
import Checkbox from '../images/checked.svg'
import PlusSign from '../images/plus-sign.svg'

const IndexPage = ({data}) => {

  const [checkedAll, setCheckedAll] = useState(true);
  const [filters, setFilters] = useState([false, false, false]);
  const [entryAmount, setAmount] = useState(6);
  const [entriesData, setEntries] = useState(data.allContentfulEntry.edges.slice(0,6));
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
    setCheckedAll(false)
    const updatedCheckedState = filters.map((item, index) =>
      index === position ? !item : item
    );

    setFilters(updatedCheckedState);
  }
  
  useEffect(()=> {
    var res = [];
    if(!checkedAll) {
      filters.forEach((filter, index)=> filter? res.push(categories[index]):null)
      const found = data.allContentfulEntry.edges.filter(entry => res.includes(entry.node.internal.type.replace("Contentful", "")))
      setEntries(found.slice(0,entryAmount));
    } else{
      setEntries(data.allContentfulEntry.edges.slice(0,entryAmount))
    }
    
  }, [filters,entryAmount])

  const ViewMore = () => {
    if (data.allContentfulEntry.edges.length >= entryAmount) {
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
              <span className={styles.listIcon}>{
                checkedAll ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>All</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(0)}>
              <span className={styles.listIcon}>{
                filters[0] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>Feature</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(1)}>
              <span className={styles.listIcon}>{
                filters[1] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>Projects</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(2)}>
              <span className={styles.listIcon}>{
                filters[2] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>News</span>
            </li>
          </ul>
        </nav>
        <div>

        <div className={styles.posts}>
          {entriesData.map(entry => (
          <div key={entry.node.id} className={styles.post}>
            <Link to={entry.node.slug}>
            <GatsbyImage 
            image={entry.node.image.gatsbyImageData}
            className={styles.imgContainer}></GatsbyImage>
            <div className={styles.postInfo}>
              <div className={styles.type}>{entry.node.internal.type.replace("Contentful","")}</div>
              <div className={styles.date}>{entry.node.date && "20"+entry.node.date}</div>
              <h3 className={styles.postTitle}>{entry.node.title}</h3>
              <p className={styles.postDesc}>{entry.node.summary && entry.node.summary.summary}</p>
            </div>
            </Link>
          </div>
          ))}
        </div>
        { data.allContentfulEntry.edges.length >= entryAmount && entriesData.length >= entryAmount  ?
        
        <button className={styles.viewMore} onClick={() => ViewMore()}>
          <h3>View More</h3>
          <div className={styles.plus}><PlusSign /></div>
        </button>
        :null}
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
    allContentfulEntry(sort: {fields: node_locale}) {
      edges {
        node {
          ... on ContentfulNews {
            id
            slug
            title
            date(formatString: "YY/MM/DD")
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
            date(formatString: "YY/MM/DD")
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
