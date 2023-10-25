import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){
  if (username === null) {
    return {
      user: null,
      error: null,
      isLoading: false,
    };
  }


  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)  

    function handleRefreshUser(){
      mutate()
    }

    return{
        users: data,
        error, 
        isLoading: !data && !error,
        onRefresh:handleRefreshUser
    }
}