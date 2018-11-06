import { route } from 'preact-router';

import {
  Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown,
} from 'reactstrap';

import { Info, LogOut, User } from 'react-feather';
// I18n
import { Text } from 'preact-i18n';
// style
import './style.scss';

export default (props) => (
  <div className="wrap profile">
    {props.user.id
      ? <ProfileMenu {...props} />
      : <LoginMenu {...props} />}
  </div>);

const ProfileMenu = props => (<div className='profile-menu'>
  <UncontrolledDropdown>
    <DropdownToggle tag="div">
      <User size={24} color='white'/>
    </DropdownToggle>
    <DropdownMenu right style={{minWidth: '12rem'}}>
      <DropdownItem header>{`Hey! ${props.user.name}`}</DropdownItem>
      <DropdownItem divider/>
      <DropdownItem onClick={() => route('/profile')}>
        <Info color='black' size="16"/>
        <span>
          <Text id={'generics.profile'}/>
        </span>
      </DropdownItem>
      <div className="text-right ml-3 mr-3 mt-2 signout">
        <Button block color="success" size="sm" onClick={() => {
          props.logout();
        }}>
          <LogOut size="15"/>
          <span><Text id='generics.logout'/></span>
        </Button>
      </div>
    </DropdownMenu>
  </UncontrolledDropdown>
</div>);

const LoginMenu = props => (
  <div>
    <Button onClick={() => route('/signup')} color="info" outline
            className="mb-2"><Text id={'header.register'}/></Button>{' '}
    <Button onClick={() => route('/login')} color="success"
            className="mb-2"><Text id={'header.login'}/></Button>{' '}
  </div>
);