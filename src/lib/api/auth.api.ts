import { request } from "../Axios";

export const handleGetDodamUser = async (
  req: string | string[] | undefined
) => {
  const url: string = "v1/auth/";
  const { data }: any = await request.post(url, { code: req });

  return data;
};
