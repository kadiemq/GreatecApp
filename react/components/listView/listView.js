import React from 'react'
import './styles.css'
import {useState} from "react/cjs/react.production.min";

const ListView = (props) => {
    const items = props.items

    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className={'listView-item'}>
                    <p className={'listView-p flex-2'}>{item.code}</p>
                    <p className={'listView-p flex-1'}>{item.retailPrice}</p>
                    <p className={'listView-p flex-1'}>{item.wholePrice}</p>
                </div>
                ))}
        </div>
    )
}

export default ListView
