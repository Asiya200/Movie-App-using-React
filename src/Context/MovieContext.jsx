import { createContext,useContext,useEffect,useState } from "react";

const MovieContext= createContext()

export const useMovieContext=()=>useContext(MovieContext)

export const MovieProvider=({children})=>{
    const [fav,setFav]=useState([])

    useEffect(()=>{
        const storedFavs=localStorage.getItem('fav')
        if(storedFavs) setFav(JSON.parse(storedFavs))
    },[])

        useEffect(()=>{
            localStorage.setItem('fav',JSON.stringify(fav))
        },[fav])

        const addToFav=(movie)=>{
            setFav(prev => [...prev, movie]);
        }

        const removeFromFav=(movieId)=>{
            setFav(prev=>prev.filter(movie=>movie.id!==movieId))
        }

        const isFav=(movieId)=>{
            return fav.some(movie=>movie.id===movieId)
        }

        const value={
          fav,addToFav,removeFromFav,isFav  
        }
    return <MovieContext.Provider value={value}>
        {children}
        </MovieContext.Provider>
}

