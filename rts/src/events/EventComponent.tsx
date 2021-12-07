const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }


    const ondragstart = (event: React.DragEvent<HTMLDivElement>) => {
        
    }

    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={ondragstart}>DRAG ME</div>
        </div>
    )
}

export default EventComponent