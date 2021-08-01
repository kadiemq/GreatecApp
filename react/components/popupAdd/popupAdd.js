import React from 'react'
import './styles.css'
import {useState} from "react/cjs/react.production.min";

const PopupAdd = (props) => {

    const [code, setCode] = useState('')
    const [retailPrice, setRetailPrice] = useState('')
    const [wholePrice, setWholePrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const item = {code, retailPrice, wholePrice}
        props.onAddItem(item)
        props.setPopupTrigger(false)
    }
    return (props.trigger) ? (
        <div className={'popup'}>
            <div className="popup-inner">

                <button className={'close-btn'} onClick={() => props.setPopupTrigger(false)}>Close</button>

                <div className={'add-item-form'}>
                    <form onSubmit={onSubmit}>

                        <label>Item Code: </label>
                        <input type="text" required value={code} onChange={(e) => setCode(e.target.value)}/>

                        <label>Retail Price: </label>
                        <input type="number" required value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)}/>

                        <label>Whole Price: </label>
                        <input type="number" required value={wholePrice} onChange={(e) => setWholePrice(e.target.value)}/>

                        <button>Add</button>
                    </form>
                </div>
            </div>

        </div>
    ) : '';

}

export default PopupAdd
