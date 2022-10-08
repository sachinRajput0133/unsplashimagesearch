import React from 'react'
import "./Header.css"
const Header = ({search,setSearch,page,setPage}) => {

 
const inputHandel=(e)=>{
// console.log(e.target.value)
   setSearch(e.target.value)
   
}
const debounce=(fun)=>{
    let timer;
    return function(...args){
      if(timer) clearTimeout(timer)
      timer=setTimeout(() => {
         return   fun(...args)
      }, 700);
    }

}
const debouncedInput=debounce(inputHandel)



  return (
    <div className='container  ' >
        <div className="wrapper search-wrapper">

        <div className="input">
             <input  type="text" name="" id="" placeholder='Search' onChange={debouncedInput} />
        </div>
        {/* <div className="btn">
            <button className="btn btn-primary"  >Get image </button>
        </div> */}
        </div>
    </div>
  )
}

export default Header