import React, {useState} from "react";
import * as styles from "../styles/people.module.scss";
import memberData from '../data/members.json';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage} from "gatsby-plugin-image";

const People = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {dir: {regex: "/images/members/"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {grayscale: true, cropFocus: CENTER, fit: CONTAIN}
              )
            }
            relativePath
          }
        }
      }
    }
  `)

  const [bio, setBio]=useState('');
  const [name, setName]=useState('');
  const [modal, setModal]=useState(false);
  const openModal=(bioData, name)=>{
    setBio(bioData)
    setName(name)
    setModal(true)
  }

  return (
    <div id="people" className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          People
        </h1>
        {
          modal?
          <div className={styles.modalContainer} onClick={()=>setModal(false)}>
            <div className={styles.modal} onClick={e=>e.stopPropagation()}>
              <div className={styles.closeBtn}  onClick={()=>setModal(false)}>
                <StaticImage src={'../images/close-btn.svg'} width={18} alt='close'/>
              </div>
              <div className={styles.modalTextContainer}>
                <h2 className={styles.modalTitle}>{name}</h2>
                <p className={styles.modalText}>{bio}</p>
              </div>
            </div>
          </div>
          :null
        }
        <div className={styles.container}>
          <h2 className={styles.subtitle}>Who we are</h2>
          <div className={styles.memberContainer}>
            {
              memberData.map((member, idx)=>{
                return(
                  <div className={styles.member} key={idx} onClick={()=>openModal(member.text, member.name)}>
                    <div className={styles.profileContainer}>
                      <GatsbyImage
                      alt={member.name} 
                      grayscale={true}
                      image={data.allFile.edges.find(queryData=>queryData.node.relativePath===member.profile_img).node.childImageSharp.gatsbyImageData}
                      />
                    </div>
                    <h3 className={styles.name}>
                      {member.name}
                    </h3>
                    <p className={styles.position}>
                      {member.position}
                    </p>
                  </div>
                  )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;