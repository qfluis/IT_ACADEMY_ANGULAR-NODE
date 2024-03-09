import { useRef } from "react";
const App = () => {
    const ref = useRef()
    const click = () => {
        ref.current.focus();       
    }
    return (
        <>
            <input ref={ref} />
            <button onClick={click}>Focus?</button>
        </>
    );
}
export default App;