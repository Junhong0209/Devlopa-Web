import { instance } from "src/lib/Axios";

export const handlePostComment = async (req: object) => {
  const url: string = "v1/comment/";
  const { data }: any = await instance.post(url, req);

  return data;
};

export const handleGetComment = async (req: object | null) => {
  const url: string = "v1/comment/";
  const { data }: any = await instance.get(url, { params: req });

  return data;
};

export const handleDeleteComment = async (req: object) => {
  const url: string = "v1/comment/";
  const { data }: any = await instance.delete(url, req);

  return data;
};
