import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi People</h1>
    <p>My name is Matt, happy to meet you!</p>
    <p>I am introducing myself as per the instructions!!</p>
    <p>Exciting!!!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
