import './styles/Section.css';
import FormGroup from './FormGroup';

const General = ({ form, handleChange, handleSubmit, fullName, email, phone, city }) => {
  return (
    <div className="section">
      <h1>General information</h1>
      <form onSubmit={handleSubmit} id="general">
        <FormGroup
          value={fullName}
          name={'Full name'}
          labelText={'fullName'}
          type={'text'}
          placeholder={'Full name'}
          handleChange={handleChange}
        />
        <FormGroup
          value={email}
          name={'Email'}
          labelText={'email'}
          type={'email'}
          placeholder={'Email'}
          handleChange={handleChange}
        />
        <FormGroup
          value={phone}
          name={'Phone number'}
          labelText={'phone'}
          type={'text'}
          placeholder={'Phone number'}
          handleChange={handleChange}
        />
        <FormGroup
          value={city}
          name={'City'}
          labelText={'city'}
          type={'text'}
          placeholder={'City'}
          handleChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default General;
