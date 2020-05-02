import React from 'react';
import Name from './steps/Name';
import './Form.scss';

const Form: React.FC = () => {
  return (
    <div className="home-container">
      <form>
        <Name/>
      </form>
    </div>
  );
}

export default Form;
