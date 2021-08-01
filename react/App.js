import React, {useEffect, useState} from 'react';

import Header from './components/header/header'
import ListView from './components/listView/listView'
import PopupAdd from "./components/popupAdd/popupAdd";

import './style.css'


const App = () => {

    const [items, setItems] = useState([])
    const [popupTrigger, setPopupTrigger] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const getItems = async () => {
            const itemsFromServer = await fetchAllItems()
            setItems(itemsFromServer)
        }

        getItems();
    }, [])

    // Fetch All Items
    const fetchAllItems = async () => {
        const res = await fetch('/getallitems')
        return await res.json()
    }

    const onAdd = () => {
        setPopupTrigger(true)
    }

    const onAddItem = (data) => {

        setItems([...items, data])
    }

    const search = (data) => {

        setSearchTerm(data)
        setSearchResults(items.filter((item) => item.code.toLowerCase().includes(data)))
    }

    return (
        <div>
            <Header onAdd={onAdd} search={search}/>
            <ListView items={searchTerm.length>0 ? searchResults: items}/>

            <PopupAdd trigger={popupTrigger} setPopupTrigger={setPopupTrigger} onAddItem={onAddItem}/>
        </div>
    )
};

export default App;
