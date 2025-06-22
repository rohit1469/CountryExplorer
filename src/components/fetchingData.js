import axios from "axios";

const fetchingData = async (url) => {
  try{
    let data = await axios.get(url);
    return data;
  }
  catch(error) {
    return error;
  }
};

export default fetchingData;
