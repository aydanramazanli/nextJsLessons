'use client';
import { useState , FormEvent} from "react";
import { useRouter } from "next/navigation";


export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
  return (
   <form action="" className="w-50 flex  " onSubmit={handlerSubmit}>
<input type="text" name="" id=""  value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-white  p-2 w-80 text-xl outline-none text-black rounded-xl" placeholder="Search"/>

<button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>

</button>
   </form>
  )
}
