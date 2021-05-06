import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Layout from './components/Layout'



export default function Home() {
  return (
      <Layout> 
        <div className="header">메인</div>
      </Layout>
    
  )
}
