import {ChildAsFC} from './Child'

const Parent = () => {

    return (
        <ChildAsFC color="douche" onClick={() => console.log("clicked")}>
            oien
        </ChildAsFC>
    )
}

export default Parent