import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import UploadUserImage from "../components/uploaduserimage"

const Perfil = () => (
    <Layout>
        <UploadUserImage />
    </Layout>
)

export const Head = () => <Seo title="Perfil" />

export default Perfil
