import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import requests from '@/utils/requests'

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending";
  const request = await fetch(`
    https://api.themoviedb.org/3${requests[genre].url}
  `).then(response=>response.json());

  
  return (
    <div className=''>
      {/*Header */}
      <Header></Header>

      {/*Navbar */}
      <Navbar></Navbar>

      {/*Results */}
      <Results results={request.results}></Results>
    </div>
  )
}


