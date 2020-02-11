import React, { Fragment } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';


const DatasetModalLogic = () => {
  
    const handleFileInput = async () => {
      const opts = {
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

      const fileHandle = await window.chooseFileSystemEntries(opts);
      
      const file = await fileHandle.getFile();
      // let foo = [];

      const contents = await file.text();
      //textArea.value = contents;
      console.log(fileHandle.name);
      console.log(contents);
 } 
  
    return (
            <div>
                  <Button type="dashed" onClick={handleFileInput}>Upload file</Button>
            </div>
          
    )
  } 

export default DatasetModalLogic;
