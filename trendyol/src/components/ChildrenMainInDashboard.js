import React, { Component } from "react";
import Loader from 'react-loader-spinner'


class ChildrenMainInDashboard extends Component {
  render() {
    return <div>
         <Loader
         type="Oval"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
    </div>;
  }
}
export default ChildrenMainInDashboard;
