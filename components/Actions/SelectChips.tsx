'use client'

import { Divider } from "../Layout/Divider";
import { Chip } from "./Chips";
import Chips from "@/components/Actions/Chips";

interface Props {
    label?: string;
    fill?: boolean;
    selectChips: Chip[];
    chips: Chip[];
    deleteChip: (key: number) => void;
    selectChip: (key: number) => void;
}

export default function SelectChips({ fill, label, selectChips, deleteChip, chips, selectChip }: Props) {
    return (
        <label className={`form-control w-full ${fill ? '' : 'max-w-xs'}`}>
            {label && <div className="label">
                <span className="label-text">{label}</span>
            </div>}
            <Divider
                reverse
                content1={
                    <div className="min-w-[104px] min-h-[84px] flex items-center justify-center shrink-0">
                        {selectChips.length
                            ? <div className="grid grid-cols-3 gap-4 shrink-0">
                                {selectChips.map((data) => (
                                    <div key={data.key} onClick={() => selectChip(data.key)} className='w-6 h-6'>{data.icon}</div>
                                ))}
                            </div>
                            : <div className="text-slate-400 text-center">All selected</div>
                        }
                    </div>
                }
                content2={
                    <div className="flex items-start justify-start grow">

                        {chips.length
                            ? <Chips chips={chips} deleteChip={deleteChip} />
                            : <div className="text-slate-400 text-center grow self-center">Select reactions...</div>
                        }
                    </div>
                }
            />
        </label>

    );
}
