import { instance } from "../lib/Axios";

export const handleGetPost = async (req: object | null) => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.get(url, { params: req });

  return data;
};

export const handlePostPosting = async (req: object) => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.post(url, req);

  return data;
};

export const handleDeletePost = async (req: object) => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.delete(url, req);

  return data;
};

export const handleModifyPost = async (req: object) => {
  const url: string = "v1/posting/";
  const { data }: any = await instance.put(url, req);

  return data;
};
