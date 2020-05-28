import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
import LoginPage from './loginPage'
import { createBrowserHistory } from "history"
const history = createBrowserHistory({
  basename: "/"
})
window.redirect = history.push


class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  render() {
    return (
      <div> 
        <Route path='/list' render={() => (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />
        )}/>
        <Route history={history} exact path='/' render={() => (
          <LoginPage history={history}>

          </LoginPage>
        )}/>
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  }
}

export default App;
