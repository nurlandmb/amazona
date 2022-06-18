import React from 'react';
import { Alert } from 'react-bootstrap';

function MesageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}

export default MesageBox;
