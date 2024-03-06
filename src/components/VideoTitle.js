
const VideoTitle = ({title , overview}) => {
  return (
    
        <div className='pt-60 px-10 absolute text-white
        bg-gradient-to-r from-black w-screen aspect-video'> 
             <h2 className="font-semibold text-2xl">{title}</h2>
        <h2 className="w-2/3">{overview}</h2>
        <div className="">
        <button className="bg-gray-700 px-10 mx-2 py-2 mt-6 rounded-lg text-white bg-opacity-40">▷ Play</button>
        <button className="bg-gray-700 px-12 py-2 mt-6 rounded-lg text-white">More Info</button>
        </div>
        </div>
      
  )
}

export default VideoTitle