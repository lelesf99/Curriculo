import './style.css';


export default function Card(props) {
    return (
        <div className={`card ${props.className !== undefined ? props.className : ""}`}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {props.body && <div className="card-body">
                {props.body}
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </div>
    );
}