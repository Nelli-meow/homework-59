import * as React from 'react';

const Form = () => {
  return (
    <form>
      <div className="container d-flex flex-row align-items-center">
        <label className="form-label">Add movie:</label>
        <input type="text" className="form-control mx-4"/>
        <button type="submit" className="btn btn-outline-warning">Add</button>
      </div>
    </form>
  );
};

export default Form;