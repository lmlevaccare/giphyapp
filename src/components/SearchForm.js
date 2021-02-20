import React, { useState, useEffect } from "react";
export default function SearchForm({onClick}) {
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState("")
    const handleChange = (event) => {
        const searchItem = event.target.value
        // console.log('search', searchItem)
        setSearch(searchItem)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchList(search)
    }
  
    console.log('searchlist', searchList)
    return (
        <div>
            <form onSubmit={handleSubmit} onClick={onClick} >
                <input
                    placeholder="search giphy"
                    type="text"
                    value={search}
                    onChange={handleChange} />
                <input type="submit" value="Submit" />
                {/* <input type="submit" value={data} /> */}
            </form>
        
        </div>
    )
}