import ViewHeader from './view-header';
import ViewContent from './view-content';
import './style.scss'

const Profile = (props) => (
  <div className='view view-profile'>
    <ViewHeader/>
    <ViewContent {...props}/>
  </div>
)

export default Profile