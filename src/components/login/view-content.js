import {
  Button, Card, CardBlock, Form, FormGroup, Input, Label,
} from 'reactstrap';
import { Localizer, Text } from 'preact-i18n';

const ViewContent = (props) => {
  return (
    <div className="view-content">
      <div
        className="view-pages view-session d-flex justify-content-center align-items-center flex-column">
        <Card className="mb-3 form-card">
          <CardBlock>
            <header className="mb-5">
              <strong className="h3 text-uppercase"
                      style={{color: '#212121'}}><Text
                id={'login.title'}/></strong>
            </header>
            <Form onSubmit={e => {
              e.preventDefault();
              props.callbacks.handleSubmit(e);
            }}>
              <FormGroup className="mb-4">
                <Label><Text id='login.labels.email'/></Label>
                <Localizer>
                  <Input type="text" name="email" id="email"
                         placeholder={<Text id='login.placeholders.email'/>}
                         onChange={(e) => props.callbacks.handleFillEmail(e.target.value)}
                  />
                </Localizer>
              </FormGroup>
              <FormGroup className="mb-4">
                <Label><Text id='login.labels.password'/></Label>
                <Localizer>
                  <Input type="password"
                         placeholder={<Text id='login.placeholders.password'/>}
                         onChange={(e) => props.callbacks.handleFillPassword(e.target.value)}
                  />
                </Localizer>
              </FormGroup>
              <FormGroup className="text-right">
                <Button color="success" block size="lg">
                  <Text id='login.labels.submit'/>
                </Button>
              </FormGroup>
            </Form>
          </CardBlock>
        </Card>
      </div>
    </div>
  );
};

export default ViewContent;