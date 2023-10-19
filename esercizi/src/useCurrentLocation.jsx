import { useEffect, useState } from "react";

export function useCurrentLocation(){
    const [location, setLocazion] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
       function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocazion({latitude,longitude})
        setLoading(false)
       }

       function failure(error){
        setError(error)
        setLoading(false)
       }

       navigator.geolocation.getCurrentPosition(success, failure)
    },[])

    return{location, error, loading}
}

