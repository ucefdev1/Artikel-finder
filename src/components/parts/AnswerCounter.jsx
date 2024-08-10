const AnswerCounter = ({r,w}) => {
  
  return (
    <div className="fixed bottom-4 right-4 flex space-x-3 bg-black-gradient p-2">
    <div className="flex flex-col items-center justify-center bg-green-500 text-white  h-10 p-2">
      <div className="text-sm font-bold">Correct</div>
      <div className="text-sm font-bold">{r}</div>
    </div>
    <div className="flex flex-col items-center justify-center bg-red-500 text-white  h-10 p-2">
      <div className="text-sm font-bold">Incorrect</div>
      <div className="text-sm font-bold">{w}</div>
    </div>
  </div>
  )
}

export default AnswerCounter