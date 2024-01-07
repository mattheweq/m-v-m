import Link from 'next/link'

type Album = {
  id: string;
}

export const dynamicParams = true

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const albums: Album[] = await fetch('https://mvmapi.olk1.com/albums').then((res) => res.json())
 
  return albums.map((album) => ({
    id: album.id.toString(),
  }))

}

async function getData(id:number) {

  const res = await fetch(`https://mvmapi.olk1.com/albums/${id}`)
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

type Params = {
  id: string;
};

type FetchedData={
  title: string;
  year: string;
  artwork: string;
  spotifyUrl: string;
}

export default async function Home({ params }: { params: Params }) {
  const {id} = params

  let data: FetchedData = await getData(parseInt(id))
  const {title, year, artwork, spotifyUrl} = data

  return (
    <main className="flex flex-col justify-between p-24">
      <Link href="/album" className='text-xl -mt-1'>&larr;</Link>
      <h1 className='text-3xl'>Matthew via Music</h1>

      <div className='mt-8'>
   
          <div key={id}>
   
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
   
      </div>
    </main>
  )
}
