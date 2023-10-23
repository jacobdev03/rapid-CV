const FormGroup = ({ name, labelText, type, placeholder, handleChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={labelText}>{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={labelText}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormGroup;
