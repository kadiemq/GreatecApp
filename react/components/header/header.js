import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import './style.css'
import {useState} from "react/cjs/react.production.min";

const Header = (props) => {

    const [searchText, setSearchText] = useState('')

    const searchItem = () => {
            console.log('Clicked!')
    }

    const search = (e) => {
        const data = e.target.value.toLowerCase()
        props.search(data)
    }

    return (
            <div className='container'>
                <div className='header'>

                    <div className='div-flex-1'>
                        <p onClick={props.onAdd}><FaPlus className='icons' /></p>
                    </div>

                    <div className='div-flex-1'>
                        <h1>GREATEC</h1>
                    </div>

                    <div className='div-flex-1'>

                    </div>

                </div>

                <div className="search">
                    <input type="text" onChange={search} placeholder={'Search Item Code...'}/>
                </div>

                <div className='labelsHeader'>

                    <div className='div-flex-2 labels'><p>Code</p></div>
                    <div className='div-flex-1 labels'><p>Retail</p></div>
                    <div className='div-flex-1 labels'><p>Whole</p></div>

                </div>

            </div>

        )
}

export default Header
