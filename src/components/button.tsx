interface type {
    item : string
}



export default function Button(text : type){
    return(
        <div>
            <button className="bg-red-600 px-[10px] py-[5px] text-white hover:bg-red-500 transition-colors text-xs sm:text-[16px] sm:py-[8px] sm:px-[10px]">
                        {text.item}

            </button>
        </div>
    )
}