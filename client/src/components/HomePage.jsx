import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
        <CardTitle title="Katenna home page" subtitle="amazing landing page should be here.. right melissa?." />
        {Auth.isUserAuthenticated() ? (
          <CardText style={{ fontSize: '16px', color: 'black' }}>Welcome! You are logged in.</CardText>
        ) : (
            <CardText style={{ fontSize: '16px', color: 'black' }}>You are not logged in.</CardText>
          )}
      </Card>
    )
  }
};

export default HomePage;
