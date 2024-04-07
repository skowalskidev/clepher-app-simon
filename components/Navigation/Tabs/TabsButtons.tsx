interface Props {
    labels: string[];
    selected: string;
    onTabChange: (index: number) => void;
}

export const TabsButtons = ({ labels, selected, onTabChange }: Props) => {
    return (
        <div role="tablist" className="tabs tabs-boxed">
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