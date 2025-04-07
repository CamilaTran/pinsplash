import { Input } from '@/components/ui/input'
import Image from 'next/image'

const Navigator = () => {
    return (
        <div className="flex justify-between py-7 lg:px-28 px-4 md:gap-[21px] gap-[9.5px] items-center">
            <Image src="/logo/logo-symbol.svg" alt='logo-with-symbol' height={21} width={21} className='block md:hidden'/>
            <Image src="/logo/logo-text.svg" alt='logo-with-text' height={32} width={112} className='hidden md:block'/>
            <Input placeholder='Search image Eg. Landscape' />
        </div>
    )
}

export default Navigator