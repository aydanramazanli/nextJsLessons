import getWikiResults from "../lib/getWikiResults"
import Items from "./components/Items";
type Props = {
    params:{
        searchTerm:string
    }
}

export async function generateMetaData({params: {searchTerm}}:Props): Promise<{ title: string; description: string }> {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll("%20", " ")
   if(!data?.query?.pages){
    return{
        title:`${displayTerm} not found`,
        description: " "
    }
   }
   return{
    title:displayTerm,
    description:` Search Results is ${displayTerm}`
   }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className="bg-slate-400 mx-auto max-w-3xl py-1 min-h-screen">
            {results
                ? Object.values(results).map(result => {
                    return <Items key={result.pageid} result={result}/>
                })
                : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            }
        </main>
    )

  return content
}