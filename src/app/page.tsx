import Link from 'next/link'
import getData from '../utils/getData'

type DataItem = {
  title: string;
  year: string;
  spotifyUrl: string;
  artwork: string;
}

export default async function Home() {
  let data = await getData()
  let latestRelease:DataItem = data[data.length -1]
  const {year, title, spotifyUrl, artwork} = latestRelease
  
  // lg:grid-cols-lemon
  return (
    <main className="flex flex-col p-24">
    
      <nav className="flex gap-2">
        <Link href="/album">Albums</Link>
        <Link href="/about">About</Link>
      </nav>

      <h1 className='text-3xl'>Matthew via Music</h1>

      <div className='mt-8'>
      
      
          <div className='flex gap-2'>
            <p>{title}</p>
            <p className='font-bold'>{year}</p>
          </div>

          <div className='w-fit relative group'>
            <a href={spotifyUrl} target="_blank">
          
            <span className="invisible z-10 absolute top-1 left-1 bg-[#FCFC09] p-2 group-hover:visible uppercase text-black">Click to play</span>

              <img className="w-[600px] max-w-[100%] group-hover:saturate-200 origin-top-left group-hover:scale-110" src={artwork} alt={title} />
            
            </a>
          </div>
      
      </div>
      
    </main>
  )
}
