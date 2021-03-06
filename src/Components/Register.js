import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../CSS/Register.css';
import firebase from '../lib/firebase';
import {Redirect} from 'react-router-dom';
import 'rc-slider/assets/index.css';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            major: "",
            year: "other",
            interests: "",
            noise: "",
            sleep: "",
            sex: "other",
            drinking: "n/a",
            friendliness: "",
            car: "",
            cleanliness: "",
            needcar: "",
            toContact: false
        };
      }
    //name, major, gender, year, smoking, drinking, car, interests
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }
    
    handleMajorChange = e => {
        this.setState({ major: e.target.value });
    }

    handleSexChange = e => {
        this.setState({ sex: e.value });
    }

    handleYearChange = e => {
      console.log(e);
        this.setState({ year: e.value});
    }

    handleSmokeChange = e => {
        this.setState({ smoke: e.value});
    }

    handleDrinkChange = e => {
        this.setState({ drink: e.value});
    }

    handleCarChange = e => {
        this.setState({ car: e.value});
    }

    handleInterestsChange = e => {
        this.setState({ interests: e.target.value});
    }

    handleSleepChange = e => {
        this.setState({ sleep: e.value});
    }

    handleCleanlinessChange = e => {
        this.setState({ cleanliness: e.target.value});
    }

    handleNoiseChange = e => {
        this.setState({ noise: e.target.value});
    }

    handleFriendlinessChange = e => {
        this.setState({ friendliness: e.target.value});
    }

    handleNeedCarChange = e => {
        this.setState({ needcar: e.value});
    }

  submitForm = () => {
    let db = firebase.firestore();
    console.log("Calling collection");
    console.log(this.state);
    console.log(typeof(this.state))
    db.collection("users-test").add(this.state)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
      this.setState({toContact: true});
    }
    render() {
      const drink = [
        'Yes', 'No', "Doesn't matter to me"
      ];
      const smoke = [
        'Yes', 'No'
      ];
      const sex = [
        'Male', 'Female', 'Other'
      ];
      const options = [
        'Freshman', 'Sophomore', 'Junior', 'Senior', 'Other'
      ];

      const sleep = [
        '7:00PM or earlier', '7:30PM', '8:00PM', '8:30PM', '9:00PM', '9:30PM', '10:00PM', '10:30PM', '11:00PM', '11:30PM', '12:00AM or later'
      ];

      if (this.state.toContact=== true) {
        return <Redirect to='/users' />
      }
        return (
            <div>
            <h3 className="Register">Full Name:</h3>
            <input 
                type="text"
                value={this.state.name} 
                onChange={this.handleNameChange}
            />
            <h3 className="Register">Major:</h3>
            <input 
                type="text"
                value={this.state.major} 
                onChange={this.handleMajorChange}
            />
            <h3 className="Register">Year:</h3>
            <Dropdown options={options} onChange={this.handleYearChange} value={this.state.year} placeholder="Select a year" />
            
            
            <h3 className="Register">Sex:</h3>
            <Dropdown options={sex} onChange={this.handleSexChange} value={this.state.sex} placeholder="Select sex" />

            <h3 className="Register">What time do you usually go to sleep?</h3>
            <Dropdown options={sleep} onChange={this.handleSleepChange} value={this.state.sleep} placeholder="Select the approximate time" />
            
            <h3 className="Register">On a scale of 1(lowest) to 10(highest), how clean are you?</h3>
            
            <div className="slidecontainer">
              <input type="range" min="0" max="10" step="1" className="slider" id="myRange" value={this.state.cleanliness} onChange={this.handleCleanlinessChange}/>
                                                   

             <output id="amount" name="amount" htmlFor="myRange">{this.state.cleanliness}</output>
            </div>
            
            <h3 className="Register">Do you smoke?</h3>
            <Dropdown options={smoke} onChange={this.handleSmokeChange} value={this.state.smoke} placeholder="Y/N" />

            <h3 className="Register">Do you want to live with someone who drinks alcohol?</h3>
            <Dropdown options={drink} onChange={this.handleDrinkChange} value={this.state.drink} placeholder="Y/N" />

            <h3 className="Register">Acceptable noise level on a scale of 1(lowest) to 10(highest):</h3>
            <div className="slidecontainer">
              <input type="range" min="0" max="10" step="1" className="slider" id="noiseLevel" value={this.state.noise} onChange={this.handleNoiseChange}/>
                                                   

              <output id="noise" name="noise" htmlFor="noiseLevel">{this.state.noise}</output>
            </div>

            <h3 className="Register">Do you have a car?</h3>
            <Dropdown options={smoke} onChange={this.handleCarChange} value={this.state.car} placeholder="Y/N" />

            <h3 className="Register">Would you prefer living with someone who has a car?</h3>
            <Dropdown options={smoke} onChange={this.handleNeedCarChange} value={this.state.needcar} placeholder="Y/N" />

            <h3 className="Register">On a scale of 1-10, how well do you generally get along with others?</h3>
            <div className="slidecontainer">
              <input type="range" min="0" max="10" step="1" className="slider" id="friendliness" value={this.state.friendliness} onChange={this.handleFriendlinessChange}/>
                                                   

              <output id="friendliness" name="friendliness" htmlFor="friendliness">{this.state.friendliness}</output>
            </div>

            <h3 className="Register">Interests (3 at most please!):</h3>
            <input
              type="text"
              value={this.state.interests}
              onChange={this.handleInterestsChange}
            />
            <br></br>
            <br></br>
            <button 
            onClick={this.submitForm}
            >
                Submit
            </button>
            </div>
        );
    }
}

export default Register;