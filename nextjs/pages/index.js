import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea eaque deserunt assumenda facilis doloremque placeat modi unde quos inventore. Reprehenderit molestiae obcaecati ea tempora est, sunt rerum amet recusandae!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates aspernatur dolor magnam. Repellendus voluptate dicta nesciunt ut corporis, earum facere obcaecati illum autem quas distinctio consectetur pariatur laboriosam illo.</p>
      <Link href= "/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    

    <Footer/>
    </div>
  )
}
