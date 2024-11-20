import { Button, Input } from "../index";

import './styles.css';

const ToDoForm = ({
    title,
    value,
    onChange,
    placeholder = 'Add to do',
    btnTitle,
    btnAction,
    btnType,
    clear,
}) => {
    return(
        <div className="formWrapper">
            <p>{title}</p>
            <Input clear={clear} value={value} onChange={onChange} placeholder={placeholder} />
            <Button onClick={btnAction} title={btnTitle} type={btnType} />
        </div>
    )
}

export default ToDoForm;