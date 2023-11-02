// Components
import Header from 'components/Header'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import About from 'components/About'
import Experience from 'components/Experience'
import Services from 'components/Services'

// Styles
import './styles.css'

export function Main() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Footer />
    </>
  )
}
