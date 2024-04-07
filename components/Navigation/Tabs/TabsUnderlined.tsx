interface Props {
    labels: string[];
    selected: string;
    onTabChange: (index: number) => void;
}

export const TabsUnderlined = ({ labels, selected, onTabChange }: Props) => {
    return (
        <div role="tablist" className="tabs tabs-bordered">
            {labels.map((label, index) => (
                <a
                    key={label}
                    role="tab"
                    className={`tab ${label === selected ? 'tab-active' : ''}`}
                    onClick={() => onTabChange(index)}
                >
                    {label}
                </a>
            ))}
        </div>
    );
};
