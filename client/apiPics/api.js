import axios from "axios";
import { AccessKey, root } from "./secrets";

const searchImages = async (term) => {
  const { data } = await axios.get(root, {
    headers: {
      Authorization: AccessKey,
    },
    params: {
      query: term,
    },
  });
  return data.results
};

export default searchImages;
