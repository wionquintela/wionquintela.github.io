export default function Button({onClick, showAdd, hue}) {
    return (
        <div className="text-center">
            <btn className="btn btn-danger text-light" onClick={onClick} style={{color: hue}}>
            {showAdd ? "Close" : "Open"}
        </btn>
        </div>
    )
}