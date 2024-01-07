export default async function getData() {
  const res = await fetch('https://mvmapi.olk1.com/albums')
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}