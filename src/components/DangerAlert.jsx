import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function DangerAlert( {isVisible, dismiss} ) {
  const [show, setShow] = useState(isVisible);

  useEffect( () => {
        setShow(isVisible)
  },[isVisible] )

  if (show) {
    return (
      <Alert variant="danger" onClose={() => dismiss()} dismissible>
        <Alert.Heading> Incorrect password </Alert.Heading>
    
      </Alert>
    );
  }
}

export default DangerAlert