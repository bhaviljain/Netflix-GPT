
const VideoTitle = ({title , overview}) => {
  return (
    
        <div className=' bg-gradient-to-bl from-black aspect-video w-screen  pt-[150px] px-10 absolute text-white
        '> 
             <h2 className=" font-semibold text-2xl ">{title}</h2>
        <h2 className="">{overview}</h2>
        <div className="">
        <button className="bg-gray-700 px-10 mx-2 py-2 rounded-lg text-white bg-opacity-40" >▷ Play</button>
        <button className="bg-gray-700 px-12 py-2 mt-6 rounded-lg text-white">More Info</button>
        </div>
        </div>
      
  )
}

export default VideoTitle