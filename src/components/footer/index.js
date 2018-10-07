import './style.scss';

const Footer = () => {
  const date = new Date();

  return (
    <footer className='footer'>
      <p>{`Gladys Project - ${date.getFullYear()}`}</p>
    </footer>
  );
};

export default Footer;
