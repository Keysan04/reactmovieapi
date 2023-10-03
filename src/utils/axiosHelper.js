import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=5dea0df7&t=";

export const fetchMovie = async (str) => {
  // promise

  //   axios.get(apiUrl).then((response) => {
  //     console.log(response);
  //   });

  // async/await
  try {
    const response = await axios.get(apiUrl + str);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
