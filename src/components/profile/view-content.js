import {
  Button, Card, CardBlock, Form, FormFeedback, FormGroup, Input, Label,
} from 'reactstrap';
// import translations from './translations';
import { Localizer, Text } from 'preact-i18n';

const ViewContent = (props) => {

  const {errors} = props;
  return (
    <div className="view-content">
      <div
        className="view-pages view-session d-flex justify-content-center align-items-center flex-column">
        <Card className="mb-3 form-card">
          {/*<CardBlock>*/}
            {/*<header className="mb-5">*/}
              {/*<strong className="h3 text-uppercase"*/}
                      {/*style={{color: '#212121'}}><Text*/}
                {/*id={'signup.title'}/></strong>*/}
            {/*</header>*/}
            {/*<Form onSubmit={e => {*/}
              {/*e.preventDefault();*/}
              {/*props.handleSubmit();*/}
            {/*}}>*/}
              {/*<FormGroup className="mb-4">*/}
                {/*<Label for="name"><Text id='signup.labels.name'/></Label>*/}
                {/*<Localizer>*/}
                  {/*<Input type="text" name="name" id="name"*/}
                         {/*placeholder={<Text id='signup.placeholders.name'/>}*/}
                         {/*onChange={(e) => props.handleFillInput('name',*/}
                           {/*e.target.value)}*/}
                         {/*onBlur={props.validation.isValidName}*/}
                  {/*/>*/}
                {/*</Localizer>*/}
                {/*{errors.name && <FormFeedback tooltip><Text*/}
                  {/*id='signup.errors.name'/></FormFeedback>}*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="mb-4">*/}
                {/*<Label for="email"><Text id='signup.labels.email'/></Label>*/}
                {/*<Localizer>*/}
                  {/*<Input type="text" name="email" id="email"*/}
                         {/*placeholder={<Text id='signup.placeholders.email'/>}*/}
                         {/*onChange={(e) => props.handleFillInput('email',*/}
                           {/*e.target.value)}*/}
                         {/*onBlur={props.validation.isValidEmail}*/}
                  {/*/>*/}
                {/*</Localizer>*/}
                {/*{errors.email && <FormFeedback tooltip><Text*/}
                  {/*id='signup.errors.email'/></FormFeedback>}*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="mb-4">*/}
                {/*<Label for="password"><Text*/}
                  {/*id='signup.labels.password'/></Label>*/}
                {/*<Localizer>*/}
                  {/*<Input type="password" name="password" id="password"*/}
                         {/*placeholder={<Text id='signup.placeholders.password'/>}*/}
                         {/*onChange={(e) => props.handleFillInput('password',*/}
                           {/*e.target.value)}*/}
                         {/*onBlur={props.validation.isValidPassword}*/}
                  {/*/>*/}
                {/*</Localizer>*/}
                {/*{errors.password && <FormFeedback tooltip><Text*/}
                  {/*id='signup.errors.password'/></FormFeedback>}*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="mb-4">*/}
                {/*<Localizer>*/}
                  {/*<Input type="password" name="validpass" id="validpass"*/}
                         {/*placeholder={<Text*/}
                           {/*id='signup.placeholders.confirmPassword'/>}*/}
                         {/*onChange={(e) => props.handleFillInput(*/}
                           {/*'confirmPassword',*/}
                           {/*e.target.value)}*/}
                         {/*onBlur={props.validation.isValidConfirmPassword}*/}
                  {/*/>*/}
                {/*</Localizer>*/}
                {/*{errors.confirmPassword &&*/}
                {/*<FormFeedback tooltip><Text id='signup.errors.valid-password'/></FormFeedback>}*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="mb-4">*/}
                {/*<Label for="language"><Text*/}
                  {/*id='signup.labels.language'/></Label>*/}
                {/*<Input type="select" name="language" id="language"*/}
                       {/*onChange={(e) => props.handleFillInput('language',*/}
                         {/*e.target.value)}>*/}
                  {/*<option default value='fr'><Text*/}
                    {/*id='generics.languages.french'/></option>*/}
                  {/*<option value='en'><Text id='generics.languages.english'/>*/}
                  {/*</option>*/}
                {/*</Input>*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="text-right">*/}
                {/*<Button color="success" block size="lg">*/}
                  {/*<Text id='signup.labels.submit'/>*/}
                {/*</Button>*/}
              {/*</FormGroup>*/}
            {/*</Form>*/}
          {/*</CardBlock>*/}
        </Card>
      </div>
    </div>
  );
};

export default ViewContent;