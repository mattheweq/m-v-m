import Link from 'next/link'
 
export default async function NotFound() {
  
  return (
    <div className='mt-48 gap-4 flex flex-col justify-center items-center'>
      
      <p className="border-b-2 border-red-400"><Link href="/">Home</Link></p>
      <h2 className='text-7xl text-center'>Page Not Found</h2>

    </div>
  )
}