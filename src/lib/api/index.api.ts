import { request } from "../Axios";

export const handleGetUrl = async () => {
  const url: string = "v1/url/";
  const { data }: any = await request.get(url);

  return data;
};
