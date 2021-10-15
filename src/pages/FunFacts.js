import React from 'react';
import ModalOne from '../components/ModalOne';
import ModalTwo from '../components/ModalTwo';
import ModalThree from '../components/ModalThree';

function Funfacts() {
  
    return (
      <div className="container text-center">
          <h1 className="padding">Fun Facts about me</h1>
                {/* FunFact1 */} 
                <br />   
            <ModalOne />
                {/* FunFact2 */}
                <br />
            <ModalTwo />
                {/* FunFact3 */}
                <br />
            <ModalThree />
     </div>
    );
  }

export default Funfacts;