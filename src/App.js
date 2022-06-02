import React from 'react';
import './App.scss';
import './components/navItem/NavItem'
import NavItem from './components/navItem/NavItem';
import Card from './components/card/Card';
import Filter from './components/filter/Filter';
import { MdFilterList } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import data from './data'

function App() {
  const your = 'your';
  const all = 'all';
  const blocked = 'blocked';

  const [currentData, setCurrentData] = useState(data);
  const [currentTab, setCurrentTab] = useState(all);
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [cardType, setCardType] = useState('both');
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    var temp;
    if (currentTab === all) {
      temp = data;
    } else if (currentTab === your) {
      temp = data.filter(item => item.owner_id === 1);
    } else {
      temp = data.filter(item => item.status === blocked);
    }

    temp = temp.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))

    if (cardType === 'subscription') {
      temp = temp.filter(item => item.card_type === 'subscription')
    } else if (cardType === 'burner') {
      temp = temp.filter(item => item.card_type === 'burner')
    }

    if (owner)
      temp = temp.filter(item => item.owner_name === owner)
    setCurrentData(temp)
  }, [currentTab, searchInput, cardType, owner]);


  return (
    <div className="App">
      <section className='mb-8'>
        <h1 className="text-4xl font-bold">
          Virtual cards
        </h1>
      </section>

      <section className='mb-8'>
        <div>
          <nav className='flex justify-start items-center'>
            <NavItem onClick={() => setCurrentTab(your)} name={your} current={currentTab === your} />
            <NavItem onClick={() => setCurrentTab(all)} name={all} current={currentTab === all} />
            <NavItem onClick={() => setCurrentTab(blocked)} name={blocked} current={currentTab === blocked} />
          </nav>
        </div>
        <div className='w-full h-0.5 bg-gray-500 opacity-20 relative -top-0.5 -z-10'></div>
      </section>

      <section className='mb-8'>
        <div className='w-full flex justify-end items-center'>

          <div className='mr-4 relative'>
            <input value={searchInput} onChange={e => setSearchInput(e.target.value)} className='search-input' type="text" />
            <BiSearch size={'1.7em'} className=" absolute right-1 top-1" />
          </div>
          <div className='relative'>
            <button onClick={() => setFilterVisibility(!filterVisibility)} className='flex align-middle bg-gray-100 rounded py-1.5 px-4 text-gray-700 font-medium'>
              <MdFilterList size={'1.5em'} />
              <span className=' ml-2'>Filter</span>
            </button>
            <Filter visible={filterVisibility} setCardType={setCardType} setOwner={setOwner} setFilterVisibility={setFilterVisibility} />
          </div>
        </div>
      </section>

      <section>
        <div className='w-full flex justify-between items-center flex-wrap'>
          {
            currentData.map(item => <Card data={item} key={item.name} />)
          }
        </div>
      </section>

      <p className='credit'>Made with ❤️ by <a href="https://www.linkedin.com/in/abhishekm2106/">Abhishek Mohanty</a></p>
    </div>
  );
}

export default App;
