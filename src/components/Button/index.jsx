import './style.css'
import React from 'react';

export default function Button(props) {
    if (props.href === undefined) {
        if (props.submit) {
            return (
                <button
                    id={props.id}
                    className={`btn ${props.className !== undefined ? props.className : ""}`}
                    type="submit"
                    disabled={props.disabled ? "disabled" : ""}
                    onClick={props.submit !== undefined ? (e) => { e.preventDefault(); props.submit(); } : () => { return null }}>
                    {props.icon}<span>{props.text}</span>
                </button >
            );
        } else {
            return (
                <button
                    id={props.id}
                    className={`btn ${props.className !== undefined ? props.className : ""}`}
                    type="button"
                    disabled={props.disabled ? "disabled" : ""}
                    onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}>
                    {props.icon}<span>{props.text}</span>
                </button >
            );
        }
    } else {
        return (
            <a
                id={props.id}
                className={`btn ${props.className !== undefined ? props.className : ""}`}
                href={props.href}
                onClick={props.onClick !== undefined ? () => props.onClick() : () => { return null }}>
                {props.icon}<span>{props.text}</span>
            </a >
        );
    }
}