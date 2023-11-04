const GeneralCv = ({ formData, handleDelete }) => {
  const general = formData.map((gen) => (
    <div key={gen.id} id={gen.id}>
      <h1>{gen.fullName}</h1>
      <p>{gen.email}</p>
      <p>{gen.phone}</p>
      <p>{gen.city}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ));
  return <div className="cv-section general">{general}</div>;
};

export default GeneralCv;
