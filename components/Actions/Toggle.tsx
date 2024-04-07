'use client'

interface Props {
    label: string;
    checked?: boolean;
}

export const Toggle = ({ label, checked }: Props) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input type="checkbox" className="toggle" checked={checked} />
            </label>
        </div>
    )
}