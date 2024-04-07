'use client'

import { Divider } from "../Layout/Divider";
import { Chip } from "./Chips";
import Chips from "@/components/Actions/Chips";
import IconPicker from "./IconPicker";

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
                    <IconPicker
                        icons={selectChips.map((chip) => ({ key: chip.key, icon: chip.icon }))}
                        selectIcon={selectChip}
                    />
                }
                content2={
                    <div className="flex items-start justify-start grow">
                        {chips.length ? (
                            <Chips chips={chips} deleteChip={deleteChip} />
                        ) : (
                            <div className="text-slate-400 text-center grow self-center">Select reactions...</div>
                        )}
                    </div>
                }
            />
        </label>
    );
}
