interface Props {
    labels: string[];
    selected: string;
    onTabChange: (index: number) => void;
}

export const TabsButtons = ({ labels, selected, onTabChange }: Props) => {
    return (
        <div className="flex-1">
            <div role="tablist" className="tabs tabs-boxed grow">
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
        </div>
    );
};