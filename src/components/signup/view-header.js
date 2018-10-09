import { Text } from 'preact-i18n'

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase"><Text id='signup.title'/></h1>
      <p className="mb-0"><Text id='signup.subtitle'/></p>
    </header>
  </div>
);

export default ViewHeader