import React from "react";

export default function Textarea() {
    return (
        <form>
            <label>
                Last Name:
                <input id={lastname} type={text}/>
                <select>
                    <option value="orange">orange</option>
                    <option value="pink">pink</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                </select>
            </label>
        </form>

    )
}