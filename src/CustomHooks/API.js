import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CommonContext } from '../Context/CommonContext';

const useApi = (initialUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { state, dispatch } = useContext(CommonContext)

    const fetchData = async () => {
        try {
            setError(null);
            setLoading(true);

            const response = await axios.get(initialUrl);

            setData(response.data);
            setLoading(false);
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
            return error;
        }
    };

    useEffect(() => {
        fetchData();
    }, [initialUrl]);

    const postData = async (url, requestData) => {
        try {
            setError(null);
            setLoading(true);
            dispatch({ type: 'enablePageLoader' })
            const response = await axios.post(url, requestData);

            setData(response.data);
            setLoading(false);
            dispatch({ type: 'disablePageLoader' })
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
            dispatch({ type: 'disablePageLoader' })
            return error;
        }
    };

    return { data, loading, error, fetchData, postData };
};

export default useApi;