import { Link } from 'react-router-dom';
import Button from './Button';

const PlaySugg = () => {
  return (
    <div className="fixed right-1 bottom-1 flex items-center justify-end mb-2">
      <Link to="/game" className="border-2 text-white font-semibold text-xs border-yellow-500 bg-black-gradient p-1 max-w-[25vw]">
        <Button className="text-sm">Enhance your mastery of Der, Die, Das by playing our game.</Button>
      </Link>
    </div>
  )
}

export default PlaySugg