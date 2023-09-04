import { useRef, useState, useEffect } from 'react';
import './style.css';

export default function Frame(props) {
    const tooltipTarget = useRef();
    const [tooltipShow, setTooltipShow] = useState(false);

    useEffect(() => {
        const targetRef = tooltipTarget;
        const listenerEnter = (e) => {
            setTooltipShow(true);
        };
        const listenerLeave = (e) => {
            setTooltipShow(false);

        };

        targetRef.current.addEventListener('mouseover', listenerEnter);
        targetRef.current.addEventListener('mouseout', listenerLeave);

        return () => {
            targetRef.current.removeEventListener('mouseover', listenerEnter);
            targetRef.current.removeEventListener('mouseout', listenerLeave);
        }
    }, [])
    return (
        <div className={`frame ${props.className !== undefined ? props.className : ""} ${props.noOutline ? 'no-outline' : ''}`} tabIndex={0}>
            {props.tooltip && <div className={`tooltip ${tooltipShow ? 'show' : 'hide'}`}>{props.tooltip}</div>}
            <h1 className='title' ref={tooltipTarget}>{props.title}</h1>
            {props.children}
        </div>
    );
}