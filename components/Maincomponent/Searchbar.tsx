import classes from '../Maincomponent/search.module.css'
import React, { useState } from 'react';

const Searchbar = ({ Popular_Dishes, setfilteredData }:any) => {

    const [inputedValue, setInputedValue] = useState('')


    function handleKeypres(event:any):void {
        if(event.Key === 'Enter'){
            return filterHandler(event)
        }
    }


    const filterHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const data = event.target.value
        const filteredData = Popular_Dishes.filter((value:any) => {
            return value.Name.toLowerCase().includes(data)

        })
        setInputedValue(data)
        setfilteredData(filteredData)
        
    }

    const icons = inputedValue === '' ?  "fa-solid fa-magnifying-glass" : "fa-solid fa-xmark"
    const clearData = ()=>{
        setInputedValue('')
        setfilteredData(Popular_Dishes)
    }
    const SearchData = () => {

    }

    const onClickevent = icons =="fa-solid fa-xmark" ? clearData : SearchData

    return (<div className="w-[40%]  h-[60%] border-[2px] text-white border-red-500 pt-1 rounded-full pl-[26px]"><i className={icons} onClick={onClickevent} >

    </i>
        <input className='w-[70%] h-[90%]  p-2   outline-none' onKeyPress={handleKeypres} onChange={filterHandler} value={inputedValue} placeholder='Search' type="text" name="Search" id={classes.Search} />
    </div>);
}

export default Searchbar;