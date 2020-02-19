import React from 'react';
import { Row, Col } from 'antd';
import ProcessingFlowBar from './ProcessingFlowBar';

const Processing = () => (
    <div>
    <Row>
      <Col span={21}>  
      <h1>Processing</h1>
      <p>This is the processing page!</p></Col>

      <Col span={3}><ProcessingFlowBar /></Col>
    
    </Row>
  </div>
);

export default Processing;