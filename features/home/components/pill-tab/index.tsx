import Image from "next/image"

export interface PillTabProps {
    src: string;
    title: string;
    alt: string
}

const PillTab = ({ src, title, alt }: PillTabProps) => {
    return (

        <div className="bg-neutral-50 flex gap-3 items-center pl-1 pr-3 py-1 rounded-full group cursor-pointer">
            <div className="relative w-10 h-10 rounded-full">
                <Image src={src} fill className="object-cover rounded-full" alt={alt} />
            </div>

            <span className="text-base font-semibold text-neutral-600 group-hover:text-neutral-900">
                {title}
            </span>

        </div>

    )
}

export default PillTab