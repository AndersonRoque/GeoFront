import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Menu, Dropdown, Button, Input, Icon, message, Select } from 'antd';




class DatasetModalLogic extends Component {
  constructor(props) {
    super(props);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.changeXValue = this.changeXValue.bind(this);
    this.changeYValue = this.changeYValue.bind(this);
    this.changeMPLValue = this.changeMPLValue.bind(this);

    this.state = { fileUploaded: false, 
                  headers: [],
                  X: '',
                  Y: '',
                  MPL: '',
                  datasetName: '' }
  }
  
  changeXValue = (event) => {
    //console.log(event.target.value);
    this.setState({X: event.target.value});
  }
  
  changeYValue = (event) => {
    this.setState({Y: event.target.value});
  }
  
  changeMPLValue = (event) => {
    this.setState({MPL: event.target.value});
  }

  changeDatasetName = (event) => {
    //console.log(event.target.value);
    this.setState({datasetName: event.target.value});
  }


  async handleFileInput() {
    const opts = {
      // Parsing types
      type: 'openFile',
      accepts: [{
        description: 'XYZ File',
        extensions: ['xyz'],
        mimeTypes: ['text/plain'],
      },
      {
        description: 'Comma-separated Values (CSV))',
        extensions: ['csv'],
        mimeTypes: ['text/plain'],  
      }
    ],
    };
  
    // Filehandle = isDirectory: false, isFile: true, name: xxxx
    const fileHandle = await window.chooseFileSystemEntries(opts);
    
    // file: name, lastModified, webkitrelativepath, size
    const file = await fileHandle.getFile();
    const fileext = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2); // Credits to StackOverflow
    const contents = await file.text();

    if(fileext === 'csv') {
      var splitContent = contents.split(/\r\n|\n/);
      this.setState({ headers: splitContent[0].split(',')} );
      this.setState({ fileUploaded: true });
    };
    
  
    // DEBUG:
    // contents: inside file
    //console.log(file);
    //console.log(fileHandle);
    //console.log(fileext);
    //console.log(contents);
    };   

   // const parametersChoice() {
    //  return ( <div>"Hello!"</div>)
   // };

  // TO-DO Quinta: Seleção de Items e desaparecer botão
  // TO-DO Sexta: Redux e display na janela dataset
    render() {
      let parametersChoice;
      const { Option } = Select;


      //if(this.state.fileUploaded) {
        //parametersChoice = this.state.headers.map((item) => { return  <div>X: <Select><Option value={item}>{item}</Option></Select> 
        //Y: <Select><Option value={item}>{item}</Option></Select></div>})
        
       // }
       if(this.state.fileUploaded) {
        //console.log(this.state.headers); 
        return <div>
          <Button type="dashed" onClick={this.handleFileInput}>Change file</Button><br />
          Dataset Name:  <Input placeholder="Put the fucking name here" onChange={this.changeDatasetName} />
          X: <select onChange={this.changeXValue}>{this.state.headers.map((header) => <option key={header}>{header}</option>)}</select><br />
          Y: <select onChange={this.changeYValue}>{this.state.headers.map((header) => <option key={header}>{header}</option>)}</select><br />
          MPL: <select onChange={this.changeMPLValue}>{this.state.headers.map((header) => <option key={header}>{header}</option>)}</select><br />
          Datum: TO-DO<br />
          <Button type="primary" disabled={!(this.state.X && this.state.Y && this.state.MPL && this.state.datasetName)}>Add</Button>
        </div>   
      };
  

    return (
            <div>
                  <Button type="primary" onClick={this.handleFileInput}>Upload file</Button>
                  
            </div>
            
      );
    };
}

export default DatasetModalLogic;
