import { collectionAPI } from "@/apis/collectionApi";
import Tab from "@/features/home/components/tab";

export default async function Home() {
  const collections = await collectionAPI.getList();

  return (
    <div className="min-h-screen">
      <div className="lg:pl-28 md:pl-8 py-2">
        <Tab list={collections ?? []} />
      </div>
    </div>

  );
}
