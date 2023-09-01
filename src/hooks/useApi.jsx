import API from '../services/api'
import { useState } from "react"

const useApi = (urlObject) => {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const call = async (payload, type = '') => {
        setResponse(null)
        setError("")
        setIsLoading(true)
        try {
            let res = await API(urlObject, payload, type);
            setResponse(res.data)
            // res.data mean in axios it comes along with statuscode

        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    return { call, response, error, isLoading }
}

// It is async there might be chance for exception thatsy try
// and catch

export default useApi; 