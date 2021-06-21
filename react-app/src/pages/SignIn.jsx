import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1345971700714917894/dBZ5QHmi_400x400.jpg" />
                <Dropdown pointing="top right" text="Arwen">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Cv" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
