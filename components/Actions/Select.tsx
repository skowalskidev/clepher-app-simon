
'use client'

interface Props {
    label?: string;
    selected?: string;
    options: string[];
    fill?: boolean;
}

export const Select = ({ label, selected, options, fill }: Props) => {
    return (
        <label className={`form-control w-full ${fill ? '' : 'max-w-xs'}`}>
            {label && <div className="label">
                <span className="label-text">{label}</span>
            </div>}
            <select className="select select-bordered">
                <option disabled defaultValue={selected}>{selected}</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </label>
    )
}
