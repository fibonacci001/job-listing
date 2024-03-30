import axios from "axios";
import { useQuery, useMutation } from "react-query";


const Fetchdata = () => {
  return axios.get("http://localhost:8000/Job")
}
const addjobs = (newjob) => {
    return axios.post("http://localhost:8000/Job", newjob)
}
export const useFetchjobs = () => {
  const {data, isLoading, isError, error} = useQuery("job", Fetchdata)
  return {data, isLoading, isError, error }
}
 export const useAddnewjob = () => {
    return useMutation(addjobs)
 }