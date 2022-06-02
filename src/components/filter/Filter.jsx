import './filter.scss'
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import data from '../../data'


const Filter = ({ visible, setCardType, setOwner, setFilterVisibility }) => {
    const [subscription, setSubscription] = useState(false)
    const [burner, setBurner] = useState(false)
    const [ownerLocal, setOwnerLocal] = useState('')
    const set = new Set();
    data.forEach(item => { set.add(item.owner_name) })
    const options = Array.from(set);

    const apply = () => {
        if (subscription && burner)
            setCardType('both')
        else if (subscription)
            setCardType('subscription')
        else if (burner)
            setCardType('burner')
        else
            setCardType('')
        setFilterVisibility(false)
        setOwner(ownerLocal)
    }

    const clear = () => {
        setSubscription(false)
        setBurner(false)
        setCardType('')
        setFilterVisibility(false)
        setOwner(null)
    }

    // const defaultOption = options[0];
    return (
        <div className='filter' style={{ display: `${visible ? 'block' : 'none'}` }}>
            <div className="head">Filter</div>
            <div className='w-full h-px bg-gray-300'></div>
            <div className="body">
                <div>Type</div>
                <div className='flex mb-4 text-black'>
                    <label className='flex items-center mr-14'>
                        <input type="checkbox" checked={subscription} onChange={() => setSubscription(!subscription)} className='mr-2' />
                        Subscription
                    </label>
                    <label className='flex items-center mr-14'>
                        <input type="checkbox" checked={burner} onChange={() => setBurner(!burner)} className='mr-2' />
                        Burner
                    </label>
                </div>
                <div>Cardholder</div>
                <Dropdown className='drop' placeholderClassName='myPlaceholderClassName' menuClassName='myMenuClassName' value={ownerLocal} onChange={(e) => { setOwnerLocal(e.value) }} options={options} placeholder="Select Cardholder" />
                <div className='flex justify-between mt-3'>
                    <button onClick={apply} className='apply'>Apply</button>
                    <button onClick={clear} className='clear'>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;