import { unsplashApi } from "./index";

const collectionAPI = {
  getList: async () => {
    const res = await unsplashApi.get("/topics");
    return res.data;
  },

  getPhotos: async (topicId: string, page = 1) => {
    console.log(topicId);
    const res = await unsplashApi.get(`/topics/${topicId}/photos`, {
      params:{
        page
      }
    });
    return res.data;
  },
};

export { collectionAPI };
