
'use client'

interface Props {
    label?: string;
    selected?: string;
    options: string[];
}

export const Select = ({ label, selected, options }: Props) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <select className="select select-bordered">
                <option disabled defaultValue={selected}>{selected}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </label>
    )
}
