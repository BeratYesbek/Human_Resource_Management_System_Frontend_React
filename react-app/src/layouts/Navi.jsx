import React, {useState} from "react";
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment, Container } from 'semantic-ui-react'
import SignIn from '../pages/SignIn'
import SignOut from '../pages/SignOut'

export default function Navi() {


    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut() {
        setIsAuthenticated(false)
      }
    
      function handleSignIn() {
        setIsAuthenticated(true)
      }

    return (
        <div>
            <Segment color="black" inverted>
                <Container>
                    <Menu color="black" inverted secondary>
                        <Menu.Item
                            name='Job Advertisements'
                            
                        />
                        <Menu.Item
                            name='My Profile'
                        />
                        <Menu.Item
                            name='My Applications'
                        />
                        <Menu.Menu position="right">
                        {isAuthenticated?<SignIn signOut={handleSignOut}/>
                       :<SignOut signIn={handleSignIn}/>}  

                        </Menu.Menu>

                    </Menu>
                </Container>

            </Segment>
        </div>
    )
}
