import Image from "next/image"

export const Header = () => {
    return (
        <nav className="navbar fixed z-20 border-b border-b-base-300 bg-base-100 w-full p-2 flex justify-between items-center ">
            <div className='relative w-12 h-12'>
                <Image
                    priority
                    src='/images/clepher-logo-black-716x204.svg'
                    alt='Clepher Logo'
                    fill
                ></Image>
            </div>
            <div className='relative aspect-square w-12'>
                <Image
                    priority
                    src='/images/profile.jpeg'
                    alt='simon kowalski profile picture'
                    fill
                    className='object-cover rounded-full'
                    sizes="40vw,(min-width: 1024px) 33vw"></Image>
            </div>
        </nav>
    )
}