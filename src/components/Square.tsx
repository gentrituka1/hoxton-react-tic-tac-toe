
type Props = {
    value: string;
    onClick: () => void;
    id?: string;
}

export function Square ({value, onClick, ...props}: Props) {
    return (
        <button className="square" {...props} onClick={onClick} >
            {value}
        </button>
    );
}

