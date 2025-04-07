import Image from "next/image";

import { socialLinks } from "./data";

const Footer = () => {
    return (
        <div className="md:px-8 md:py-[34px] lg:mx-28 py-8 mx-4">
            <div className="flex md:flex-row flex-col gap-4 md:justify-between items-center">
                <p className="text-sm text-neutral-600 text-center">© {new Date().getFullYear()} Pinsplash, Inc. <br className="block md:hidden" /> All rights reserved.</p>
                <div className="flex gap-7 items-center">
                    {socialLinks.map((i) => (
                        <a className={`relative ${i.size}`} key={i.name} href={i.href} target="_blank" rel="noreferrer" aria-label={i.name}>
                            <Image src={i.src} alt={i.name} fill className="object-contain" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;