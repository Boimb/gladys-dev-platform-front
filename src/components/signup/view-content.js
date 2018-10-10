import {
  Button,
  Card,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
// import translations from './translations';
import { Localizer, Text } from 'preact-i18n';

const ViewContent = (props) => {

  const {errors} = props;
  return (
    <div className="view-content">
      <Card className='card col'>
        <Form onSubmit={e => {
          e.preventDefault();
          props.handleSubmit()
        }}>
          <FormGroup row>
            <Label for="name" sm={3} md={{size: 6, offset: 3}}><Text
              id='signup.labels.name'/></Label>
            <Col sm={9} md={{size: 6, offset: 3}}>
              <Localizer>
                <Input type="text" name="name" id="name"
                       placeholder={<Text id='signup.placeholders.name'/>}
                       onChange={(e) => props.handleFillInput('name',
                         e.target.value)}
                       onBlur={props.validation.isValidName}
                />
              </Localizer>
              {errors.name && <FormFeedback tooltip><Text id='signup.errors.name'/></FormFeedback>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={3} md={{size: 6, offset: 3}}><Text
              id='signup.labels.email'/></Label>
            <Col sm={9} md={{size: 6, offset: 3}}>
              <Localizer>
                <Input type="text" name="email" id="email"
                       placeholder={<Text id='signup.placeholders.email'/>}
                       onChange={(e) => props.handleFillInput('email',
                         e.target.value)}
                       onBlur={props.validation.isValidEmail}
                />
              </Localizer>
              {errors.email && <FormFeedback tooltip><Text id='signup.errors.email'/></FormFeedback>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={3}
                   md={{size: 6, offset: 3}}><Text
              id='signup.labels.password'/></Label>
            <Col sm={9} md={{size: 6, offset: 3}}>
              <Localizer>
                <Input type="password" name="password" id="password"
                       placeholder={<Text id='signup.placeholders.password'/>}
                       onChange={(e) => props.handleFillInput('password',
                         e.target.value)}
                       onBlur={props.validation.isValidPassword}
                />
              </Localizer>
              {errors.password && <FormFeedback tooltip><Text id='signup.errors.password'/></FormFeedback>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={{size: 9, offset: 3}} md={{size: 6, offset: 3}}>
              <Localizer>
                <Input type="password" name="validpass" id="validpass"
                       placeholder={<Text
                         id='signup.placeholders.confirmPassword'/>}
                       onChange={(e) => props.handleFillInput('confirmPassword',
                         e.target.value)}
                       onBlur={props.validation.isValidConfirmPassword}
                />
              </Localizer>
              {errors.confirmPassword && <FormFeedback tooltip><Text id='signup.errors.valid-password'/></FormFeedback>}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="language" sm={3} md={{size: 6, offset: 3}}><Text
              id='signup.labels.language'/></Label>
            <Col sm={9} md={{size: 6, offset: 3}}>
              <Input type="select" name="language" id="language"
                     onChange={(e) => props.handleFillInput('language',
                       e.target.value)}>
                <option default value='fr'><Text id='generics.languages.french'/></option>
                <option value='en'><Text id='generics.languages.english'/></option>
              </Input>
            </Col>
          </FormGroup>
          <Row>
            <Col sm={12} md={{size: 6, offset: 3}}>
              <div className='clearfix'>
                <Button className='btn btn-primary float-right'><Text
                  id='signup.labels.submit'/></Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
};


export default ViewContent;