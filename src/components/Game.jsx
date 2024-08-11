import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import { Howl } from 'howler';
import correctSoundFile from '../assets/audio/correct.wav';
import wrongSoundFile from '../assets/audio/wrong.wav';


import AnswerCounter from './parts/AnswerCounter';
import 'react-toastify/dist/ReactToastify.css';


const Game = () => {

    // word start
    const [word,setWord] = useState(false);
    const [correctArticle,setCorrectArticle] = useState('');
    const [rightCount, setRightCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
   

    const correctSound = new Howl({
        src: [correctSoundFile],
      });
      
      const incorrectSound = new Howl({
        src: [wrongSoundFile],
      });



    const rightCounter = () =>{
        setRightCount(rightCount+1)
    }

    const falseCounter = (r) =>{
        setWrongCount(wrongCount+1)
    }


    const checkArticle = (article) => {
        if(correctArticle === article){
            rightCounter()
            toast.dismiss()
            correctSound.play()
            toast.success("gute answer",
                {
                    position: "top-center",
                    autoClose: 2000, 
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        backgroundColor: 'green',        // Red background
                        color: 'white',                // White text
                        fontWeight: 'bold',   
                        borderRadius: '0px', 
                    },
                    progressStyle: {
                        backgroundColor: 'black', 
                        borderRadius: '0px',      // Black progress bar
                                  // No border radius for the progress bar
                    }
                }
            )
        }else
        {
            falseCounter()
            toast.dismiss()
            incorrectSound.play()
            toast.error(`Nein, das richtige Artikel ist: "${correctArticle}"`, 
                {
                    position: "top-center",
                    autoClose: 2000, 
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: {
                        backgroundColor: 'red',        // Red background
                        color: 'white',                // White text
                        fontWeight: 'bold',   
                        borderRadius: '0px', 
                    },
                    progressStyle: {
                        backgroundColor: 'black', 
                        borderRadius: '0px',      // Black progress bar
                                  // No border radius for the progress bar
                    }
                })
                
        }
        fetchRandomNoun();
    }
  
    
    const fetchRandomNoun = async () => {
        try {
            let nounFound = false;

            while (!nounFound) {
                const response = await fetch('https://www.dwds.de/api/wb/random');
                const data = await response.json();
                
                // Loop through the returned array to find a noun
                for (const item of data) {
                    if (item.pos === 'Substantiv') {
                        setWord(item.lemma);
                        setCorrectArticle(item.articles[0]); // Extract the first article
                        nounFound = true;
                        break; // Exit loop once a noun is found
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching the word or article:', error);
        }
    };


    useEffect(()=>{fetchRandomNoun()},[])
    

  return (
    <>
    <div className="flex flex-col space-y-4 justify-center items-center min-h-[70vh]">
    <div className="text-2xl text-white font-bold">Select the right Article</div>
    <div className="bg-yellow-gradient text-black font-bold p-5">
        <div className='text-3xl'>{word  != false ? word : <BounceLoader />}</div>
    </div>

    {/* Artikels */}
    <div className="flex flex-row  justify-center items-center space-x-4">
    <div onClick={()=>{
        checkArticle('der') }}
         className='p-6 border-1 border-white bg-gradient-to-r from-blue-500 to-blue-300 text-black font-bold cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400'>
        Der
    </div>
    <div  onClick={()=>{
        checkArticle('die') }}
         className='p-6 border-1 border-white bg-gradient-to-r from-pink-500 to-pink-300 text-black font-bold cursor-pointer hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400'>
        Die
    </div>
    <div  onClick={()=>{
        checkArticle('das') }}
         className='p-6 border-1 border-white bg-gradient-to-r from-green-500 to-green-300 text-black font-bold cursor-pointer hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400'>
        Das
    </div>
    </div>
</div>
<ToastContainer />
<AnswerCounter r={rightCount} w={wrongCount}/>
    </>
  )
}

export default Game