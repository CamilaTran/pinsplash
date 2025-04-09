import { Photo } from "@/types/photo"
import Image from "next/image"

interface PhotosGridProps {
    list: Array<Photo>
}


const PhotosGrid = ({ list }: PhotosGridProps) => {
    return (
        <div className="lg:py-12 py-10">
            <div className="columns-2 lg:columns-3 gap-4">
                {list.map((i) => (
                    <div key={i.id} className="mb-4 break-inside-avoid">
                        <Image
                            src={i.urls.raw}
                            alt={i.description ?? ""}
                            width={500}
                            height={300}
                            className="rounded-lg object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotosGrid