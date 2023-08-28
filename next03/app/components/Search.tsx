'use client';
import { useState , FormEvent} from "react";
import { useRouter } from "next/navigation";


export default function Search() {
    const [search, setSearch] =useState<any>();
    const router = useRouter();

    const handlerSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        setSearch("")
        router.push(`/${search}/`)
    }
  return (
   <form action="" className="w-50 flex  " onSubmit={e=>handlerSubmit}>
<input type="text" name="" id=""  value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-white  p-2 w-80 text-xl outline-none text-black rounded-xl" placeholder="Search"/>

<button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
    rocket
</button>
   </form>
  )
}
