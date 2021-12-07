interface ChildProps {
    color: string
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {


    return (
        <div>
            {color}
            <button onClick={onClick}>Click it!</button>
        </div>
    )
}

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
}


