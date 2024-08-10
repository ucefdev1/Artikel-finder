import React from 'react'

const LanguageDropDown = () => {
  return (
    <div class="fixed bottom-4 left-4">
    <button
      class="border-4 p-2 hover:border-red-500 border-yellow-500 text-base sm:text-lg text-white font-bold bg-black-gradient rounded"
      
    >
      English
    </button>
    <ul id="dropdownMenu" class="hidden mt-2 bg-black-gradient rounded border-4 border-yellow-500 text-white">
      <li
        class="p-2 hover:bg-yellow-500 hover:text-black cursor-pointer"
        
      >
        English
      </li>
      <li
        class="p-2 hover:bg-yellow-500 hover:text-black cursor-pointer"
       
      >
        German
      </li>
    </ul>
  </div>
  )
}

export default LanguageDropDown