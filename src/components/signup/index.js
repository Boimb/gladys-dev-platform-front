import ViewHeader from './view-header';
import ViewContent from './view-content';
import './style.scss'

const Signup = (props) => (
  <div className='view view-signup'>
    <ViewHeader/>
    <ViewContent {...props}/>
  </div>
)

export default Signup