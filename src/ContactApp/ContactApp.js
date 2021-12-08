import React, { Component } from 'react'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Axios from 'axios';
 class contactApp extends Component {
     constructor(props){
         super(props);
         this.state = {contacts:[], selectedContact: {}};
     }
     getSelectedContact = (contact) => {
        console.log("Test case 1", contact);
        this.setState({
          selectedContact: contact,
        });
      };
     componentDidMount = () =>{
      Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
           .then((response) =>{
               this.setState({contacts:response.data});
           })
           .catch();
    };
         
     
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                           <ContactList 
                            contacts = {this.state.contacts}
                            selectedContact={this.getSelectedContact}
                           />
                        </div>
                        <div className="col-md-4">
                        {Object.keys(this.state.selectedContact).length > 0 ? (
                <>
                  <ContactDetails selecteddata={this.state.selectedContact} />
                </>
              ) : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default contactApp
