import React from 'react';
import { Row, Col } from 'antd';
import ProcessingFlowBar from './ProcessingFlowBar';
import Renderer from './Renderer';

const Processing = () => (
    <div>
    <Row>
      <Col span={21}>  
      <h1>Processing</h1>
      <p>This is the processing page!</p>
      <Renderer />
      
      </Col>

      <Col span={3}><ProcessingFlowBar /></Col>
    </Row>
  </div>
);

export default Processing;