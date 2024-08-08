import { SearchBar } from "./SearchBar"

//top bar 
export const  AppBar = () => {

    return <div className="flex justify-between shadow-xl p-1">
        <div className="flex shadow-xl-p3 ">
            <div className="font-semibold text-2x1 pl-1 pr-2 pt-3 ">
                <p>Payout</p>
            </div>
            <div className="pt-3">
                ⓘ
            </div>
            <div className="pl-1 pt-3">
                <p>how it works</p>
            </div>
        </div>

        <div>
            <SearchBar />
        </div>

        <div className="pt-3 pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        </div>

    </div>

}
