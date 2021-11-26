import './style.css';
import React, { useRef, useState, useEffect } from 'react';
export default function ClickCard(props) {
    const collapsePadRef = useRef();

    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0);


    useEffect(() => {
        if (collapsePadRef.current) {
            setHeight(collapsePadRef.current.offsetHeight);
        }

    }, [active]);

    return (
        <div tabIndex="0"
            className={`card click-card ${props.className !== undefined ? props.className : ""} ${active ? 'active' : ''}`}
            onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}>
            {props.header && <div className="card-header">
                {props.header}
            </div>}
            {props.body && <div className={`card-body ${props.collapse ? 'collapse' : ''}`} style={active ? { height: height, opacity: 1 } : { height: 0, opacity: 0 }}>
                {props.collapse ? <div className='collapse-padding' ref={collapsePadRef}>
                    {props.body}
                </div> : <>{props.body}</>}
            </div>}
            {props.footer && <div className="card-footer">
                {props.footer}
            </div>}
        </div>
    );
}