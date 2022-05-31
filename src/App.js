import React from 'react';
import './App.scss';
import './components/navItem/NavItem'
import NavItem from './components/navItem/NavItem';
import Card from './components/card/Card';
import { MdFilterList } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

function App() {
  const your = 'your';
  const all = 'all';
  const blocked = 'blocked';

  const [currentTab, setCurrentTab] = useState('your');
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
      <section>
        <div className='w-full flex justify-end items-center'>
          <button className='mr-4'><BiSearch size={'1.7em'} /></button>
          <button className='flex align-middle bg-gray-100 rounded py-1.5 px-4 text-gray-700 font-medium'>
            <MdFilterList size={'1.5em'} />
            <span className=' ml-2'>Filter</span>
          </button>
        </div>
      </section>
      <section>
        <div className='w-full flex justify-between items-center'>
          <Card />
        </div>
      </section>


    </div>
  );
}

export default App;
