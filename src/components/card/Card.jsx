import './card.scss'
import { ImFire } from 'react-icons/im';
import { FaSync } from 'react-icons/fa';

const Card = ({ data }) => {

    var spentPercent = (data.spent.value / (data.spent.value + data.available_to_spend.value)) * 100;
    var availablePercent = 100 - spentPercent;

    return (
        <div className='card'>
            <div className='flex w-full justify-between items-start mb-4'>
                <div className="flex-col">
                    <div className='text-2xl font-medium capitalize'>{data.name}</div>
                    <div className='info flex items-center'>{data.owner_name} <div className='dot'></div> {data.budget_name}</div>
                </div>
                <div className='icon'>
                    {data.card_type === "burner" ? <ImFire size={'1.2rem'} color="#FF265D" /> : <FaSync size={'1.2rem'} color="#FF265D" />}
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='card-type'>{data.card_type}</div>
                <div className='limit-expiry'>{data.card_type === "burner" ? "Expires" : "Limit"} : {data.card_type === "burner" ? data.expiry : data.limit}  {data.spent.currency}</div>
            </div>

            <div className="ratio-bar flex">
                <div className="spent h-full" style={{ width: `${spentPercent}%` }}></div>
                <div className="available h-full" style={{ width: `${availablePercent}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <div className="dot-2" style={{ backgroundColor: "#FF3266" }}></div>
                    <div>Spent</div>
                </div>
                <div>{data.spent.value}</div>
            </div>

            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <div className="dot-2" style={{ backgroundColor: "#219654" }}></div>
                    <div>Available to spend</div>
                </div>
                <div className=' font-medium'>{data.available_to_spend.value}</div>
            </div>
        </div>
    )
}

export default Card