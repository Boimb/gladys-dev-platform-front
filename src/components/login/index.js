import ViewHeader from './view-header';
import ViewContent from './view-content';
import './style.scss'

const Login = (props) => (
  <div className='view view-login'>
    <ViewHeader/>
    <ViewContent {...props}/>
  </div>
)


export default Login;
