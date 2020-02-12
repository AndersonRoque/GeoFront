import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Menu, Dropdown, Button, Icon, message } from 'antd';


const DatasetModalLogic = () => {
    const addCSVDataset = (file, contents) => {
      //const contents = await file.text().split(/\r\n|\n/);
      var splitContent = contents.split(/\r\n|\n/);
      var headers = splitContent[0].split(',');


      //var allTextLines = allText.split(/\r\n|\n/);
      //console.log(headers[0]);
      //console.log(file.name);
    }

    const handleFileInput = async () => {
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
      const contents = await file.text()
      if(fileext === 'csv') {
        addCSVDataset(file, contents);
      };

      // DEBUG:
      // contents: inside file
      //console.log(file);
      //console.log(fileHandle);
      //console.log(fileext);
      //console.log(contents);
 } 
  // TO-DO Quinta: Seleção de Items e desaparecer botão
  // TO-DO Sexta: Redux e display na janela dataset
    return (
            <div>
                  <Button type="dashed" onClick={handleFileInput}>Upload file</Button>
            </div>
          
    )
  } 

export default DatasetModalLogic;
