import screenfull from 'screenfull';

import { route } from 'preact-router'

import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Button
} from 'reactstrap';

// icons
import IconFace from 'react-icons/lib/md/face';
import IconMail from 'react-icons/lib/md/mail';
import IconSecurity from 'react-icons/lib/md/security';
import IconHelp from 'react-icons/lib/md/help';
import IconLogout from 'react-icons/lib/md/power-settings-new';

// I18n
import { Text } from 'preact-i18n'

// style
import './style.scss';


export default (props) => (
  <div className="wrap profile">
    {props.user.id
      ? <ProfileMenu {...props} />
      : <LoginMenu {...props} />}
  </div>);


const ProfileMenu = props => (<UncontrolledDropdown>
  <DropdownToggle tag="div">
    <img src="http://i.imgur.com/0rVeh4A.jpg" alt="avatar"/>
  </DropdownToggle>
  <DropdownMenu right style={{minWidth: '12rem'}}>
    <DropdownItem header>Balance: $993.4</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem><IconFace size="16"/>&emsp;<a href="#na">Profile</a></DropdownItem>
    <DropdownItem><IconMail size="16"/>&emsp;<a href="#na">Inbox</a></DropdownItem>
    <DropdownItem><IconSecurity size="16"/>&emsp;<a href="#na">Security</a></DropdownItem>
    <DropdownItem><IconHelp size="16"/>&emsp;<a href="#na">Help</a></DropdownItem>
    <div className="text-right ml-3 mr-3 mt-2"><Button block color="success" size="sm"><IconLogout size="15"/>&emsp;Logout</Button></div>
  </DropdownMenu>
</UncontrolledDropdown>)

const LoginMenu = props => (
  <div>
    <Button onClick={() => route('/signup')} color="info" outline className="mb-2"><Text id={'header.register'}/></Button>{" "}
    <Button onClick={() => route('/login')} color="success" className="mb-2"><Text id={'header.login'}/></Button>{" "}
  </div>
)