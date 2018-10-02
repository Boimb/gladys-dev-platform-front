import { h } from 'preact'
import style from './style'

const Footer = () => {

  const date = new Date()

  return (
    <footer class={style.footer}>
      <p>{`Gladys Project - ${date.getFullYear()}`}</p>
    </footer>
  )
}

export default Footer
