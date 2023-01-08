import axios from 'axios';
export const BASE_URL ='https://youtube-v31.p.rapidapi.com/captions';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':'b688d26b85msh58f4645d2c81130p10dc96jsne1402849f14b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const FetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};