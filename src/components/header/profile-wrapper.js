import screenfull from 'screenfull';

import { route } from 'preact-router'

import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Button
} from 'reactstrap';

// icons
import IconMail from 'react-icons/lib/md/mail';
import IconSecurity from 'react-icons/lib/md/security';
import IconHelp from 'react-icons/lib/md/help';

import { User, Info, LogOut } from 'react-feather'

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
    <User size={24} color='white'/>
  </DropdownToggle>
  <DropdownMenu right style={{minWidth: '12rem'}}>
    <DropdownItem header>{`Hey! ${props.user.name}`}</DropdownItem>
    <DropdownItem divider/>
    <DropdownItem><Info size="16"/> <a href="#na"><Text id={'generics.profile'}/></a></DropdownItem>
    <DropdownItem><IconMail size="16"/>&emsp;<a href="#na">Inbox</a></DropdownItem>
    <DropdownItem><IconSecurity size="16"/>&emsp;<a href="#na">Security</a></DropdownItem>
    <DropdownItem><IconHelp size="16"/>&emsp;<a href="#na">Help</a></DropdownItem>
    <div className="text-right ml-3 mr-3 mt-2">
      <Button block color="success" size="sm" onClick={() => {
        console.log('clicked')
        props.logout()
      }}>
        <LogOut size="15"/>
        <Text id='generics.logout'/>
      </Button>
    </div>
  </DropdownMenu>
</UncontrolledDropdown>)

const LoginMenu = props => (
  <div>
    <Button onClick={() => route('/signup')} color="info" outline className="mb-2"><Text id={'header.register'}/></Button>{" "}
    <Button onClick={() => route('/login')} color="success" className="mb-2"><Text id={'header.login'}/></Button>{" "}
  </div>
)