import Link from 'next/link'
import getData from '../../utils/getData'

export default async function About() {
  let data = await getData()
  let discographyCount = data.length

  return (
    <main className="flex flex-col p-24">
      <Link href="/">Home</Link>
      <h1 className='text-3xl'>Matthew via Music</h1>

      <div className='mt-8'>
        <p>Has released {discographyCount} Albums</p>
        <p>Has had 500+ unique listeners on Spotify since 2018</p>
        <p>Has done hardly any promotion...</p>
      </div>
    </main>
  )
}
