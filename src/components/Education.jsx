import { useState } from 'react';
import FormGroup from './FormGroup';
import './styles/Section.css';

const Education = () => {
  const [form, setForm] = useState({
    degree: '',
    school: '',
    city: '',
    country: '',
    startDate: '',
    endDate: '',
  });

  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      degree: degree,
      school: school,
      city: city,
      country: country,
      startDate: startDate,
      endDate: endDate,
    });
    setDegree('');
    setSchool('');
    setCity('');
    setCountry('');
    setStartDate('');
    setEndDate('');
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'degree':
        setDegree(e.target.value);
        break;
      case 'school':
        setSchool(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'country':
        setCountry(e.target.value);
        break;
      case 'startDate':
        setStartDate(e.target.value);
        break;
      case 'endDate':
        setEndDate(e.target.value);
        break;
    }
  };

  console.log(form);

  return (
    <div className="section">
      <h1>Education information</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup
          value={degree}
          name={'Degree'}
          labelText={'degree'}
          type={'text'}
          placeholder={'Degree'}
          handleChange={handleChange}
        />
        <FormGroup
          value={school}
          name={'School'}
          labelText={'school'}
          type={'text'}
          placeholder={'School'}
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
        <FormGroup
          value={country}
          name={'Country'}
          labelText={'country'}
          type={'text'}
          placeholder={'Country'}
          handleChange={handleChange}
        />
        <FormGroup
          value={startDate}
          name={'Start date'}
          labelText={'startDate'}
          type={'date'}
          placeholder={'Start date'}
          handleChange={handleChange}
        />
        <FormGroup
          value={endDate}
          name={'End date'}
          labelText={'endDate'}
          type={'date'}
          placeholder={'End date'}
          handleChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default Education;
