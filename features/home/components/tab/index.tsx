import { Topic } from "@/types/topic";
import PillTab from "../pill-tab";

interface TabProps {
    list: Array<Topic>
}

const Tab = ({ list }: TabProps) => {
    return (
        <div className="relative">
            <div className="overflow-x-auto scrollbar-hide w-full">
                <div className="flex gap-4 w-max">
                    {list.map(i => <PillTab key={i.id} title={i.title} alt={i.cover_photo.alt_description} src={i.cover_photo.urls.small ?? ""} />)}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-28 h-full bg-[linear-gradient(to_right,#ffffff_30%,#ffffff00_100%)] z-10"></div>
        </div>
    )
}

export default Tab;