import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_options } from "../utils/Constants";
import { IMG_CDN_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import Header from "./Header";

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);
  const [prod, setProd] = useState([])
  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
    Production()
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US",
        API_options
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieID +
          "/videos?language=en-US",
          API_options
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      console.log(filterData);

      setVideo(json.results[0]);
      // setVideo(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  const Production = async () =>{
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US",
        API_options
      );
          const res = await data.json()
          console.log(res);
          setProd(res)
        
    }


  return (
    <>
      {/* DESKTOP VIEW */}
      <div className='hidden md:mt-[10px]  md:block'>
        {/* <div className='flex flex-col'>
          <p className='text-4xl text-center mt-8 font-bold text-teal-200'>
            {movies?.title}
          </p>
          <img
            className=' w-[90%] border-[1px] border-brand-beige mt-8 mx-auto rounded-xl'
            src={IMG_CDN_URL + movies?.poster_path}
            alt='movie poster'
          />
        </div>

        <div className='flex mt-[75px] flex-col'>
          <p className='text-sm text-left px-4 py-2 w-[60%] ml-5 mt-8  border-[1px] border-teal-200 rounded-lg text-white'>
            {movies?.overview}
          </p>
          <div className='flex ml-[10px] mt-6'>
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className='rounded-full ml-2 px-4 py-2  border-[1px] border-teal-200 text-white'>
                  {genre?.name}
                </p>
              );
            })}
          </div>

          <p className='text-xl text-left ml-5 mt-8 px-4 py-2 w-[60%] rounded-lg border-[1px] border-teal-200 text-white'>{movies?.status} &nbsp; {movies?.release_date}</p>
        </div>  */}
        <div className='w-screen -mt-24 absolute aspect-video hidden md:block'>
          <iframe
            className=''
            width='100%'
            height='100%'
            src={
              "https://www.youtube.com/embed/" +
              video?.key +
              "?autoplay=1&mute=1"
            } //
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullscreen></iframe>
        </div>
      </div>
      <div className='absolute hidden md:block top-[0px] h-screen w-screen bg-gradient-to-r from-black'>
        <div className='text-white absolute ml-14 top-[250px] '>
          <h1 className='font-semiboldbold text-6xl'>{movies?.title}</h1>
          
          <p className='mt-2 w-[60%]'>{movies?.overview}</p>
          <div className='flex ml-[-15px] mt-6'>
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-white'>
                  {genre?.name}
                </p>
              );
            })}
            

          </div>
          <h2 className="text-black font-bold text-3xl mt-[20%]">Production companies</h2>
          {prod?.production_companies?.map((produc) => {
              return (
                <p
                  key={produc?.id}
                  className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-black'>
                  {produc?.name}
                </p>
              );
            })}
        </div>
        <span className="text-black font-bold text-2xl relative top-[150vh] ml-[7%]">Budget : {prod.budget/100000000}M$</span>
<span className="text-black font-bold text-2xl ml-10 relative top-[150vh]">Revenue : {Math.floor(prod.revenue/10000000)}M$</span>
      </div>
      

      {/* MOBILE VIEW */}
      <div className='md:hidden '>
        <img
          className=' w-[90%] border-[1px] border-brand-beige mt-8 mx-auto rounded-xl'
          src={IMG_CDN_URL + movies?.poster_path}
          alt='movie poster'
        />

        <p className='text-sm text-left px-4 py-2 w-[90%] ml-5 mt-8  border-[1px] border-teal-200 rounded-lg text-black'>
          {movies?.overview}
        </p>
        <div className='flex flex-wrap left-4 absolute top-5  mt-6'>
          {movies?.genres?.map((genre) => {
            return (
              <p
                key={genre?.id}
                className='rounded-full m-2 px-4 py-2 bg-black text-white'>
                {genre?.name}
              </p>
              
            );
          })}
          
        </div>

        <span className="text-black font-bold text-2xl mt-[10%]">Production companies</span>
        

          {prod?.production_companies?.map((produc) => {
              return (
                <p
                  key={produc?.id}
                  className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-black'>
                  {produc?.name}

                </p>
              );
              

            })}
<span className="text-black font-bold text-2xl">Budget : {prod.budget/100000000}M$</span>
<span className="text-black font-bold text-2xl ml-10">Revenue : {Math.floor(prod.revenue/10000000)}M$</span>
      </div>
      <div className="mt-5 mb-5 text-blue-900 font-semibold ">
      <a className="hover:underline-blue-900" href="https://www.argyllemovie.com"
>www.argyllemovie.com</a>
      </div>

    </>
  );
};

export default MovieDetailsPage;