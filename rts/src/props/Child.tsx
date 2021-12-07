export const Child = ({color}: ChildProps) => {



    return (
        <div>
            {color}
        </div>
    )
}


interface ChildProps {
    color: string
}