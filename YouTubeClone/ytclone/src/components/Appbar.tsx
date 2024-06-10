import { SearchBar } from "./SearchBar"


export const Appbar = () => {
    return <div className="flex justify-between items-center pt-1 p-3">
            <div className="text-md inline-flex items-center pb-2">
                YouTube
            </div>
            <div className="flex-grow max-w-6/12">
                <SearchBar/>
            </div>
            <div>
                signIn
            </div>
    </div>
}