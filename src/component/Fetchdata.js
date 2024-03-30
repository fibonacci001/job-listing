import axios from "axios";
import { useQuery } from "react-query";


const Fetchdata = () => {
  return axios.get("http://localhost:8000/Job")
}
export const useFetchjobs = () => {
  const {data, isLoading, isError, error} = useQuery("job", Fetchdata)
  return {data, isLoading, isError, error }
}


