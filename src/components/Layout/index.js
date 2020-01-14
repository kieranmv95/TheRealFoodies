import React from "react"
import { Link } from "gatsby"
import './index.css';
import style from './index.module.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <header className={style.header}>
          <ul>
            <li><Link className={style.header__title} to={`/`}>TheRealFoodies<span>.co.uk</span></Link></li>
          </ul>
        </header>

        <main class="content">{children}</main>
      </div>
    )
  }
}

export default Layout
