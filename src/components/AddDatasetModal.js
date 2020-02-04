import React from 'react';
import { Modal } from 'antd';

const addDatasetModal = (props) => (
    <Modal
      visible={props.state.addDatasetModalVisible}
      title="Add a Dataset"
      //onOk={this.handleOk}
      //onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
    </Modal>
  );

  export default addDatasetModal;