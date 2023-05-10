import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      {/*Header */}
      <Header></Header>

      {/*Navbar */}
      <Navbar></Navbar>

      {/*Results */}
      <Results></Results>
    </div>
  )
}
