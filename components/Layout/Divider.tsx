
'use client'

interface Props {
    content1: React.ReactNode,
    content2: React.ReactNode,
    reverse?: boolean;
}

export const Divider = ({ content1, content2, reverse }: Props) => {
    return (
        <div className={`${reverse ? 'flex-col-reverse' : ''} flex flex-col sm:flex-row w-full`}>
            {content1}
            <div className="divider sm:divider-horizontal shrink-0"></div>
            {content2}
        </div>
    )
}

