import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){
  if (username === null) {
    return {
      user: null,
      error: null,
      isLoading: false,
    };
  }


  const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)  

    return{
        users: data,
        error, 
        isLoading: !data && !error
    }
}