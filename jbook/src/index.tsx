import * as esbuild from 'esbuild-wasm'
import {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import {unpkgPathPlugin} from "./plugins/unpkg-path-plugin";

const App = () => {
    const ref = useRef<any>()
    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        })
        // console.log(service)
    }

    useEffect(() => {
        startService()
    }, [])

    const onClick = async () => {
        if (!ref.current) {
            return
        }

        // const result = await ref.current.transform(input, {
        //     loader: 'jsx',
        //     target: 'es2015',
        // }) // renders code without using unpkg plugin just to test basic transpiling (doesn't handle imports)
        // setCode(result.code) // pre unpkg

        const result = await ref.current.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin()]
        })

        setCode(result.outputFiles[0].text) // output of bundling process using plugin

    }

    return (
        <div>
            <textarea value={input} onChange={event => setInput(event.target.value)}/>
            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <pre>{code}</pre>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
