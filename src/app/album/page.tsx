import Link from 'next/link'
import getData from '../../utils/getData'

type DataItem = {
  id: number;
  title: string;
  year: string;
}

export default async function Album() {

  let data = await getData()
  data.reverse()

  return (
    <main className="flex flex-col justify-between p-24">
      <Link href="/">Home</Link>
      <h1 className='text-3xl'>Discography</h1>

      <div className='mt-8'>
      {data.map((x: DataItem) => (
          <div key={x.id}>
        <Link href={`/album/${x.id}/`}>
          <div className='flex gap-2'>
            <p>{x.title}</p>
            <p className='font-bold'>{x.year}</p>
          </div>
        </Link>
          </div>
      ))}
      </div>
      
    </main>
  )
}
