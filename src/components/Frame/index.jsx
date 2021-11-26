import './style.css';

export default function Frame(props) {
    return (
        <div className={`frame ${props.className !== undefined ? props.className : ""}`} tabIndex={0}>
            <h1 className='title'>{props.title}</h1>
            {props.children}
        </div>
    );
}