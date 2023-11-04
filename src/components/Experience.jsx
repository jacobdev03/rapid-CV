import { useState } from 'react';
import FormGroup from './FormGroup';
import './styles/Section.css';

const Experience = ({ form, handleChange, handleSubmit, experienceData }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    setShowForm(!showForm);
  };

  const handleSave = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setShowForm(!showForm);
  };

  return (
    <div className="section">
      <h1>Experience information</h1>
      <div className="experience-data">
        <button className="show-form-btn" onClick={handleAdd}>
          Experience +
        </button>
        {showForm && (
          <form onSubmit={handleSave} id="experience">
            <FormGroup
              value={experienceData.jobTitle}
              name={'Job Title'}
              labelText={'jobTitle'}
              type={'text'}
              placeholder={'Job title'}
              handleChange={handleChange}
            />
            <FormGroup
              value={experienceData.company}
              name={'Company'}
              labelText={'company'}
              type={'text'}
              placeholder={'Company'}
              handleChange={handleChange}
            />
            <FormGroup
              value={experienceData.startDate}
              name={'Start date'}
              labelText={'startDate'}
              type={'date'}
              placeholder={'Start date'}
              handleChange={handleChange}
            />
            <FormGroup
              value={experienceData.endDate}
              name={'End date'}
              labelText={'endDate'}
              type={'date'}
              placeholder={'End date'}
              handleChange={handleChange}
            />
            <FormGroup
              value={experienceData.description}
              name={'Description of job'}
              labelText={'description'}
              type={'textarea'}
              placeholder={'Description'}
              handleChange={handleChange}
            />

            <button>Add</button>
          </form>
        )}
        {form.map((exp) => (
          <h3 key={exp.id}>{exp.jobTitle}</h3>
        ))}
      </div>
    </div>
  );
};

export default Experience;
