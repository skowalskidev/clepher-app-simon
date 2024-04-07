
'use client'

interface Props {
    label?: string;
    buttonLabel: string;
    placeholder?: string;
    fill?: boolean;
}

export const InputButton = ({ label, buttonLabel, placeholder, fill }: Props) => {
    return (
        <div className="flex gap-2 items-end">
            <label className={`form-control w-full ${fill ? '' : 'max-w-xs'}`}>
                {label && <div className="label">
                    <span className="label-text">{label}</span>
                </div>}
                <input type="text" placeholder={placeholder} className={`input input-bordered w-full ${fill ? '' : 'max-w-xs'}`} />
            </label>
            <button className="btn btn-primary">{buttonLabel}</button>
        </div>
    )
}
