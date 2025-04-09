import { collectionAPI } from "@/apis/topicApi";
import Tab from "@/features/home/components/tab";
import PhotosGrid from "@/features/photos/components/photo-grid";
import Loading from "@/features/shell/loading.tsx";

export default async function Home() {
  const collections = await collectionAPI.getList();
  const photos = await collectionAPI.getPhotos(collections[0].id)

  return (
    <div className="min-h-screen">
      <div className="lg:pl-28 md:pl-8 py-2">
        <Tab list={collections ?? []} />
      </div>
      <div className="lg:px-28 px-4 md:gap-[21px]">
        <PhotosGrid list={photos} />
      </div>
      <Loading />
    </div>

  );
}
