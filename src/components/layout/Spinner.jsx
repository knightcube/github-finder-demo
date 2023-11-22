import React from 'react';
import LoadingSpinner from '../layout/assets/loading_spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img className="w-50 mx-auto" src={LoadingSpinner} alt="Loading" />
    </div>
  )
}

export default Spinner