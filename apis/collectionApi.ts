import { unsplashApi } from "./index";

const collectionAPI = {
  getList: async () => {
    const res = await unsplashApi.get("/topics", {
      params: { per_page: 20 },
    });
    return res;
  },
};

export { collectionAPI };
