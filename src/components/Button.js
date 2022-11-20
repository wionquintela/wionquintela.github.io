export default function Button({onClick, showAdd, hue}) {
    return (
        <btn className="btn btn-danger text-light" onClick={onClick} style={{color: hue}}>
            {showAdd ? "Close" : "Open"}
        </btn>
    )
}