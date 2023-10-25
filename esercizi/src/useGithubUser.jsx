import useSWR, { mutate } from "swr";



export function useGithubUser(username){
  if (username === null) {
    return {
      user: null,
      error: null,
      isLoading: false,
    };
  }


  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`)  

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