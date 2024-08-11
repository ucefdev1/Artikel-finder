import React from 'react';
import SectionImage from '../assets/img1.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchResult from './parts/SearchResult';
import NoResult from './parts/NoResult';


const SearchSection = () => {

  const [search,setSearch] = useState('')
  const [availableResult,setAvailableResult] = useState(false)
  const [word,setWord] = useState('')
  const [wordType,setWordType] = useState('')
  const [article,setArticle] = useState(false)
  

  const handleInputChange = (event) => {
    setSearch(event.target.value)
    fetchSearchWord(event.target.value)

  };

  const fetchSearchWord = async (word) => {
    try {
      // First API call to ensure the word is German
        const response = await fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${import.meta.env.VITE_YANDEX_API_KEY}&lang=de-de&text=${word}`); // [lang=de-de] 
        
        const data = await response.json();

        if (data.def && data.def.length > 0) {
          // Second API call to get the gender information
          const responseWithGen = await fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${import.meta.env.VITE_YANDEX_API_KEY}&lang=de-en&text=${word}`); // [lang=de-en] 
          const dataWithGen = await responseWithGen.json();
            const germanWord = data.def[0].text;
            const wordType = data.def[0].pos;
            let article = '';
            

            if (dataWithGen.def[0].gen) {
                switch (dataWithGen.def[0].gen) {
                    case 'm':
                        article = 'der';
                        break;
                    case 'f':
                        article = 'die';
                        break;
                    case 'n':
                        article = 'das';
                        break;
                    default:
                        article = false;
                }
                setArticle(article)
            }

            setWordType(wordType);
            setWord(`${article} ${germanWord}`);
            console.log(word)
            setAvailableResult(true);
        } else {
            setAvailableResult(false);
        }
    } catch (error) {
        setSearch('problem');
        console.error('Error fetching word details:', error);
    }
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
</div>

    </motion.div>
        </div>
        { search.length>=2 & availableResult ? <SearchResult input={search} word={word} type={wordType} article={article}/> : '' }
        { search.length>=2 & !availableResult ? <NoResult/> :'' }
      </div> 
    </section>
  );
}




export default SearchSection;
