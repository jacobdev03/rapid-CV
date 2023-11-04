const ExperienceCv = ({ formData, handleDelete }) => {
  const experiences = formData.map((experience) => (
    <div key={experience.id} id={experience.id}>
      <h3>{experience.jobTitle}</h3>
      <p>{experience.company}</p>
      <p>{experience.startDate}</p>
      <p>{experience.endDate}</p>
      <p>{experience.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ));
  if (experiences.length > 0) {
    return (
      <div className="cv-section">
        <h2 className="section-heading">Experiences</h2>
        {experiences}
      </div>
    );
  } else {
    return;
  }
};

export default ExperienceCv;
