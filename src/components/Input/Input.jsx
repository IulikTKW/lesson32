

const Input = ({value, onChange, placeholder}) => {

    const handleChange = (event) => {
        onChange(event.target.value)
    }

    return <input value={value} onChange={handleChange} placeholder={placeholder}/>
}

export default Input;