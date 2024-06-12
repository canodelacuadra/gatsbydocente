import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function ContactoCollapse(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        + info
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <div className='alert alert-success'>
        Info de contacto o fomulario de contacto
        </div>
   
      </Collapse>
    </React.StrictMode>
  );
}

export default ContactoCollapse;