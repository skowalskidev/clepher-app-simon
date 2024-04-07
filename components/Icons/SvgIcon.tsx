import Image from "next/image"

interface Props {
    path: string;
}

export const SvgIcon = ({ path }: Props) => {
    return (
        <div className='relative w-full h-full'>
            <Image
                src={path}
                alt='svg icon'
                fill
            ></Image>
        </div>
    )
}
