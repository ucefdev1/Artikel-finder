import React from 'react';
import SectionImage from '../assets/img1.svg';
import { useState } from 'react';
import { Card } from './parts/Card';
import { motion } from 'framer-motion';


const SearchSection = () => {

  const [search,SetSearch] = useState('')
  

  const handleInputChange = (event) => {
    SetSearch(event.target.value)
  };


  return (
    <section className="min-h-[100vh]">
      <div className="flex flex-col sm:space-y-2 md:space-x-2 min-h-[70vh] justify-center items-center">
        <div>
          {/* Before start searching */}
          <motion.div
          className="w-full flex justify-center"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: search.length > 0 ? -50 : 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img 
            className="flex items-start justify-center w-full max-h-[225px]" 
            src={SectionImage} 
            alt="Search Illustration" 
          />
          </motion.div>
        </div>
        <div>
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: search.length > 0 ? -30 : 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        <input 
      type="text" 
      placeholder="start searching" 
      className="bg-white min-w-[50vw] mt-4 p-3 sm:p-4 h-[37.5px] text-base sm:text-lg text-black font-bold outline-none"
      onChange={handleInputChange}
    />
    {/* word suggetions */}
    <div className='text-white font-bold flex flex-col sm:flex-row py-4 justify-between items-start sm:items-center'>
  Did you mean :
  <div className="flex flex-col sm:flex-row">
    <a className="m-1 border-2 p-1 sm:p-2 hover:border-red-500 border-white text-sm">
      diduih
    </a>
    <a className="m-1 border-2 p-1 sm:p-2 hover:border-red-500 border-white text-sm">
      duihduihduihd
    </a>
    <a className="m-1 border-2 p-1 sm:p-2 hover:border-red-500 border-white text-sm">
      diudiuhidhiuhduihdihduihuidhuidhihd
    </a>
  </div>
</div>

    </motion.div>
        </div>
        {/* After search finished */}
       
        {
          
          search.length ?
          <motion.div 
          className="flex md:flex-row flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex md:flex-row flex-col">
          {/* Artikel */}
       <Card color={'green'} title={'Artikel'} content={'Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text '}/>
       <Card color={'yellow'} title={'Artikel'} content={'Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text '}/>
       <Card color={'red'} title={'Artikel'} content={'Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text '}/>
       <Card color={'blue'} title={'Artikel'} content={'Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text '}/>

        </div></motion.div> : ''
        } 
      </div> 
    </section>
  );
}

export default SearchSection;
