import { useState } from 'react';
import FormGroup from './FormGroup';
import './styles/Section.css';

const Experience = () => {
  const [form, setForm] = useState({
    jobTitle: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      jobTitle: jobTitle,
      company: company,
      startDate: startDate,
      endDate: endDate,
      description: description,
    });
    setJobTitle('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'jobTitle':
        setJobTitle(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value);
        break;
      case 'startDate':
        setStartDate(e.target.value);
        break;
      case 'endDate':
        setEndDate(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
    }
  };

  console.log(form);

  return (
    <div className="section">
      <h1>Experience information</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup
          value={jobTitle}
          name={'Job Title'}
          labelText={'jobTitle'}
          type={'text'}
          placeholder={'Job title'}
          handleChange={handleChange}
        />
        <FormGroup
          value={company}
          name={'Company'}
          labelText={'company'}
          type={'text'}
          placeholder={'Company'}
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
        <FormGroup
          value={description}
          name={'Description of job'}
          labelText={'description'}
          type={'textarea'}
          placeholder={'Description'}
          handleChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default Experience;
