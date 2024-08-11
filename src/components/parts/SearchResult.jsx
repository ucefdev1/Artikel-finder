import { motion } from 'framer-motion';
import { Card } from '../parts/Card'

const SearchResult = ({title,type}) => {
  return (
    <div>
    <motion.div 
      className="flex md:flex-row flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex md:flex-row flex-col">
      {/* Artikel */}
   <Card color={'green'} title={title} content={type}/>
   <Card color={'yellow'} title={'Artikel'} content={'Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text Lorel text '}/>

    </div></motion.div> 
    </div>
  )
}

export default SearchResult