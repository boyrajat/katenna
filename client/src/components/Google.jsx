import React from 'react';

const GoogleAuthExport = (config) => (Component) => {
  const {
    clientId,
    discoveryDocs,
    scope,
    signIn: SignIn
  } = config;

  return class GoogleAuthHock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSignedIn: false,
        initializing: false,
        error: null,
        signingIn: false,
        signingOut: false
      };

      this.handleSignInClick = this.handleSignInClick.bind(this);
      this.handleSignOutClick = this.handleSignOutClick.bind(this);
      this.updateSignInStatus = this.updateSignInStatus.bind(this);
    }

    componentDidMount() {
      this.setState({
        initializing: true
      });

      gapi.client
        .init({
          clientId,
          discoveryDocs,
          scope
        })
        .then(
          () => {
            var { isSignedIn } = gapi.auth2.getAuthInstance();
            isSignedIn.listen(this.updateSignInStatus);
            this.updateSignInStatus(isSignedIn.get());

            this.setState({
              initializing: false
            });
          },
          (error) => {
            this.setState({
              error,
              initializing: false
            });
          }
        );
    }

    handleSignInClick() {
      this.setState({
        signingIn: true
      });
      gapi.auth2.getAuthInstance().signIn();
    }

    handleSignOutClick() {
      this.setState({
        signingOut: true
      });
      gapi.auth2.getAuthInstance().signOut();
    }

    updateSignInStatus(isSignedIn) {
      this.setState({
        isSignedIn,
        signingIn: false,
        signingOut: false
      });
    }

    render() {
      const {
        initializing,
        isSignedIn,
        error,
        signingIn,
        signingOut
      } = this.state;

      if (!isSignedIn) {
        return <SignIn
          {...this.props}
          onSignInClick={this.handleSignInClick}
          initializing={initializing}
          error={error}
          signingIn={signingIn}
        />;
      }

      return <Component
        {...this.props}
        onSignOutClick={this.handleSignOutClick}
        signingOut={signingOut}
      />;
    }
  }
}

export default GoogleAuthExport;