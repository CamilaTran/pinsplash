import Image from "next/image"
// import './styles.scss'

const Loading = () => {
    return (
        <div className="flex items-center gap-4 justify-center">
            <div className="p-0.5 w-5 h-5 relative">
                <Image src="/loading-animate.svg" alt="loading animate" className="object-contain" fill />
            </div>
            <p className="font-medium text-sm text-neutral-600 loading-dots">Loading more ...</p>
        </div>
    )
}

export default Loading