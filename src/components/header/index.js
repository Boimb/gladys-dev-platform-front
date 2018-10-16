import ProfileWrapper from './profile-wrapper'

import IconMenu from 'react-icons/lib/md/menu';

// style
import './style.scss';


export default (props) => (
  <header className="site-head d-flex align-items-center justify-content-between">
    <div className="wrap mr-4">
      <IconMenu size="24" color="#fff" onClick={props.toggleNav} style={{cursor: 'pointer'}}/>
    </div>
    <div className="right-elems ml-auto d-flex">
      <ProfileWrapper {...props}/>
    </div>
  </header>
);
