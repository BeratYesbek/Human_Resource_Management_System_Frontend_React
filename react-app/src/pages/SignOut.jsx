import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {

    console.log("Sign out method")


    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}>Sign In</Button>
                <Button primary  style={{marginLeft:'0.5em'}}>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}
