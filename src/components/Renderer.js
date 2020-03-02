import React, { Component } from 'react';
import RendererChooseBar from './RendererChooseBar';
import RendererButton from './RendererButton';

class Renderer extends Component {    

    render() {
        return (
        
        <div>
        <RendererChooseBar /><RendererButton />
        <div>This is the renderer view module! </div>
        </div>
        );
    }
};

export default Renderer;