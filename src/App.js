
import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      First_Name: "Yousra",
      Qualification: ["BS","PRE-ENGINEERING","METRIC IN SCIENCE"],
      Last_Name: "Turk",
      Date_of_Birth: 2003
    };
  }
  changeLastName = () => {
    this.setState({Last_Name: "Arif"});
  }
  render() {
    return (
      <div>
        <h1>its Me  {this.state.First_Name}{this.state.Last_Name}</h1>
        <p>
          Last Name is  {this.state.Last_Name} 
          <br/>
          My Qualification : 
          {this.state.Qualification.map((item)=>(
        <>
        <p>{item}</p>
        <hr/>
        </>

      ))}
     
          year of birth {this.state.Date_of_Birth}.
        </p>
        <button
          type="button"
          onClick={this.changeLastName}
        >Change Last Name </button>
      </div>
    );
  }
}
export default Car;
