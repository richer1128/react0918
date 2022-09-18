function Popup(props) {
    // const handleClick = props.onClose;
    return ( 
        <div>
        <div>{props.children}</div>
        <button onClick={() => props.onClose()}>104Job</button>
        </div>
    )
};
export default Popup;