import {Child} from './Child'

const Parent = () => {

    return (
        <Child color="douche" onClick={() => console.log("clicked")}/>
    )
}

export default Parent