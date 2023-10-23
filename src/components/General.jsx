import { useState } from 'react';
import './styles/Section.css';
import FormGroup from './FormGroup';

const General = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', city: '' });
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      fullName: fullName,
      email: email,
      phone: phone,
      city: city,
    });
    setFullName('');
    setEmail('');
    setPhone('');
    setCity('');
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'fullName':
        setFullName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
    }
  };

  console.log(form);

  return (
    <div className="section">
      <h1>General information</h1>
      <form onSubmit={handleSubmit}>
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
