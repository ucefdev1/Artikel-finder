import React from 'react'
import Feature1Image from '../assets/feature1.svg';
import Feature2Image from '../assets/feature2.svg';
import Feature3Image from '../assets/feature3.svg';

const FeaturesSection = ({active}) => {


  

  return (
    <>
    { !active ? <>
   
   {/* Features Section */}
   <section className="bg-yellow-gradient py-9">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
       {/* Feature 1 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature1Image} alt="Fast Search" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">Fast Search</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Quickly find the articles you're looking for with our optimized search engine.
         </p>
       </div>
       {/* Feature 2 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature2Image} alt="Accurate Results" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">Accurate Results</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Get accurate results for your queries with our advanced filtering system.
         </p>
       </div>
       {/* Feature 3 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature3Image} alt="User Friendly" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">User Friendly</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Enjoy a user-friendly interface designed to make your search experience seamless.
         </p>
       </div>
     </div>
   </section>

   {/* About Section */}
   <section className="bg-black text-white py-9">
     <div className="px-6">
       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">About This Website</h2>
       <p className="text-sm sm:text-base leading-relaxed">
         Welcome to the Artikel Wortfinder, your go-to platform for finding the correct articles (der, die, das) in German. 
         To use this website, simply enter the word you're looking for in the search bar, and our advanced search engine 
         will instantly provide you with the correct article along with relevant examples. Whether you're a student, a 
         language enthusiast, or just someone looking to improve their German skills, this tool is designed to make your 
         learning experience quick and effective.
       </p>
       <p className="text-sm sm:text-base leading-relaxed mt-4">
         Start by typing a word in the search field, and you'll receive results categorized by the correct article. 
         Each result is accompanied by example sentences to help you understand how the word is used in context. 
         Explore our features to enjoy fast, accurate, and user-friendly assistance in mastering German articles.
       </p>
     </div>
   </section>
 </> : <>

 {/* About Section */}
 <section className="bg-black text-white py-9">
     <div className="px-6">
       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">About This Website</h2>
       <p className="text-sm sm:text-base leading-relaxed">
         Welcome to the Artikel Wortfinder, your go-to platform for finding the correct articles (der, die, das) in German. 
         To use this website, simply enter the word you're looking for in the search bar, and our advanced search engine 
         will instantly provide you with the correct article along with relevant examples. Whether you're a student, a 
         language enthusiast, or just someone looking to improve their German skills, this tool is designed to make your 
         learning experience quick and effective.
       </p>
       <p className="text-sm sm:text-base leading-relaxed mt-4">
         Start by typing a word in the search field, and you'll receive results categorized by the correct article. 
         Each result is accompanied by example sentences to help you understand how the word is used in context. 
         Explore our features to enjoy fast, accurate, and user-friendly assistance in mastering German articles.
       </p>
     </div>
   </section>
   
   {/* Features Section */}
   <section className="bg-yellow-gradient py-9">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
       {/* Feature 1 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature1Image} alt="Fast Search" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">Fast Search</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Quickly find the articles you're looking for with our optimized search engine.
         </p>
       </div>
       {/* Feature 2 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature2Image} alt="Accurate Results" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">Accurate Results</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Get accurate results for your queries with our advanced filtering system.
         </p>
       </div>
       {/* Feature 3 */}
       <div className="flex flex-col items-center text-center p-4 bg-black text-white rounded shadow-lg">
         <img className="h-25 mb-3" src={Feature3Image} alt="User Friendly" />
         <h3 className="text-lg sm:text-xl font-bold mb-1.5">User Friendly</h3>
         <p className="text-gray-300 text-sm sm:text-base">
           Enjoy a user-friendly interface designed to make your search experience seamless.
         </p>
       </div>
     </div>
   </section>
 </>}
    </>
  )
}

export default FeaturesSection