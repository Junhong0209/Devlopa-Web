import { instance, request } from "../lib/Axios";

export const handleGetDodamUser = async (
  req: string | string[] | undefined
) => {
  const url: string = "v1/auth/";
  const { data }: any = await request.post(url, { code: req });

  return data;
};

export const handleGetUserProfile = async () => {
  const url: string = "v1/profile/";
  const { data }: any = await instance.get(url);

  return data;
};

export const handleTokenCheck = async () => {
  const url: string = "v1/check_token/";
  const { data }: any = await instance.get(url);

  return data;
};
