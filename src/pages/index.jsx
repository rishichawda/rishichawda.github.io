import React from 'react'
import Hero from 'components/hero-section'
import Layout from 'components/layouts'
import './index.scss'

const pageMeta = {
  keywords:
    'web,developer,react,development,app development,websites,design,progressive,web apps,bangalore,bengaluru area india,mobile,application,android,app developer,ios,mobile apps development',
}

const App = () => (
  <Layout lightNavbar disableNavbarHide keywords={pageMeta.keywords}>
    <Hero />
  </Layout>
)

export default App
