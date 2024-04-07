'use client'

interface Icon {
    key: number;
    icon: React.ReactNode;
}

interface Props {
    icons: Icon[];
    selectIcon: (key: number) => void;
}

export default function IconPicker({ icons, selectIcon }: Props) {
    return (
        <div className="min-w-[104px] min-h-[84px] flex items-center justify-center shrink-0">
            {icons.length
                ? <div className="grid grid-cols-3 gap-4 shrink-0">
                    {icons.map((data) => (
                        <div key={data.key} onClick={() => selectIcon(data.key)} className='w-6 h-6'>{data.icon}</div>
                    ))}
                </div>
                : <div className="text-slate-400 text-center">All selected</div>
            }
        </div>
    );
}
