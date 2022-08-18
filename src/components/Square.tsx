
type Props = {
    value: string;
    onClick: () => void;
}

export function Square ({value, onClick, ...props}: Props) {
    return (
        <button className="square" {...props} onClick={onClick} >
            {value}
        </button>
    );
}

