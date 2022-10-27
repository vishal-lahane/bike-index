import axios from "axios";

export const fetchAllData = async (currentPage: number) => {
  const { data } = await axios.get(
    `/search?page=${currentPage}&per_page=10&location=Sydney&distance=10&stolenness=stolen&access_token=${process.env.REACT_APP_API_ACCESS_TOKEN}`
  );

  const { data: count } = await axios.get(
    `/search/count?page=${currentPage}&per_page=10&location=Sydney&distance=10&stolenness=stolen&access_token=${process.env.REACT_APP_API_ACCESS_TOKEN}`
  );

  return { bikes: data.bikes, rcount: count.stolen };
};

export const fetchFilterddata = async (
  currentPage: number,
  keyword: string
) => {
  const { data } = await axios.get(
    `/search?page=${currentPage}&per_page=10&query=${keyword}&location=Sydney&distance=10&stolenness=stolen&access_token=${process.env.REACT_APP_API_ACCESS_TOKEN}`
  );

  const { data: count } = await axios.get(
    `/search/count?page=${currentPage}&per_page=10&query=${keyword}&location=Sydney&distance=10&stolenness=stolen&access_token=${process.env.REACT_APP_API_ACCESS_TOKEN}`
  );
  return { bikes: data.bikes, rcount: count.stolen };
};
