import React, {useState} from 'react'

export default function NameForm() {
    const [name, setName] = useState('Alisa');
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.name.value);
    }
    const handleChange = (event) => {
        if (event.target.value.length !== 10) {  //ограничение на ввод не более 10 символов в поле
            setName(event.target.value)
        }
    }
    // проверка на то, чтобы задизейблить клавишу на клавиатуре, напр., чтобы в поле я не могла ввести букву "Q"
    const onKeyDown = (event) => {
        if (event.keyCode === 81) {
            event.preventDefault();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
              <label>
                  Name:
                  <input
                      value={name}
                      onChange={handleChange}
                      onKeyDown={onKeyDown} //проверка буквы Q
                      id="name" type="text"/>
              </label>
            <button type="submit">Отправить</button>
            </form>
    )
}