import { instance } from "../Axios";

export const handelGetPost = async () => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.get(url);

  return data;
};

export const handelPostPosting = async (req: object) => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.post(url, req);

  return data;
};
