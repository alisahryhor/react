import React from "react";

export default function Forms() {
    return (
        <form>
            <label>
                Color:
                <input type="text" />
                <select value="blue">
                    <option value="orange">orange</option>
                    <option value="pink">pink</option>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                </select>
                <input type="checkbox"/>
                checked={true}
            </label>
            <button type="submit">Отправить</button>
        </form>

    )
}