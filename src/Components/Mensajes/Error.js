import React, { Component } from "react";
import { connect } from "react-redux";

class Error extends Component {
  render() {
if(this.props.App.visible){
    return (
      <div className="LosMensajes">
            <div className={"alert alert-"+this.props.App.type} role="alert">
              {this.props.App.mensaje}
            </div>
          
      </div>
    );
  } else{
    return <span></span>
  }
} 
}
const mapStateToProps = state => {
  return { App: state.App.App.Mensaje};
};
export default connect(mapStateToProps)(Error);
