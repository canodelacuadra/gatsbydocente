import  React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ContactoCollapse from "../components/contactocollapse"
import TandemModal from "../components/tandemmodal"
import TandemSlider from "../components/tandemslider"
import { Button } from 'primereact/button';  
import Alumno from "../components/alumno"
import MiMapa from "../components/mimapa"

const IndexPage = () => {
 

  return (
  <>
 <Layout>

<MiMapa></MiMapa>
 </Layout>




  </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */


export default IndexPage
