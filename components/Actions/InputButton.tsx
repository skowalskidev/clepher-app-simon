
'use client'

interface Props {
    label?: string;
    buttonLabel: string;
    placeholder?: string;
}

export const InputButton = ({ label, buttonLabel, placeholder }: Props) => {
    return (
        <div className="flex gap-2 items-end">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
            </label>
            <button className="btn btn-primary">{buttonLabel}</button>
        </div>
    )
}
