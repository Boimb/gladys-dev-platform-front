import {
  Button, Form, FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';
// import translations from './translations';
import { Localizer, Text } from 'preact-i18n';

const ViewContent = (props) => {
  const {errors} = props;
  return (
    <div className="view-content col-sm-10 offset-sm-1">
      <div
        className="view-pages view-session d-flex justify-content-center align-items-center flex-column">
        <header className="mb-5">
          <strong className="h3 text-uppercase" style={{color: '#212121'}}>
            <Text id={'profile.title'}/>
          </strong>
        </header>
        <Form className='col-sm-12 row  align-items-center' id='form-profile' onSubmit={e => {
          e.preventDefault();
          props.handleSubmit();
        }}>
          <FormGroup className="col-sm-6 order-1">
            <FormGroup className="mb-4">
              <Label for="name"><Text
                id='signup.labels.name'/></Label>
              <Localizer>
                <Input type="text" name="name" id="name"
                       value={props.name}
                       onChange={(e) => props.handleFillInput('name',
                         e.target.value)}
                       onBlur={props.validation.isValidName}
                />
              </Localizer>
              {errors.name && <FormFeedback tooltip><Text
                id='signup.errors.name'/></FormFeedback>}
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="email"><Text
                id='profile.labels.email'/></Label>
              <Localizer>
                <Input type="text" name="email" id="email"
                       value={props.email}
                       onChange={(e) => props.handleFillInput('email',
                         e.target.value)}
                       onBlur={props.validation.isValidEmail}
                />
              </Localizer>
              {errors.email && <FormFeedback tooltip><Text
                id='signup.errors.email'/></FormFeedback>}
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="language"><Text
                id='profile.labels.language'/></Label>
              <Input type="select" name="language" id="language"
                     onChange={(e) => props.handleFillInput('language',
                       e.target.value)}>
                <option selected={props.language === 'fr'} value='fr'><Text
                  id='generics.languages.french'/></option>
                <option selected={props.language === 'en'}  value='en'><Text id='generics.languages.english'/>
                </option>
              </Input>
            </FormGroup>
          </FormGroup>
          <FormGroup className="col-sm-6 text-center order-sm-1">
            <div>
              <h1>Avatar</h1>
              <h3>Soon...</h3>
            </div>
          </FormGroup>

          <FormGroup className="col-sm-12 text-center order-2">
            <Button color="success" size="mb-4">
              <Text id='profile.labels.submit'/>
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
    );
};

export default ViewContent;