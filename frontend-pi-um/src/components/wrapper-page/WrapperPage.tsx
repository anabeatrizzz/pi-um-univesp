import React, { FC } from 'react';
import Footer from '../footer';
import Header from '../header';
import clsx from 'clsx';
import useStyles from './WrapperPage.css';

interface IWrapperPage {
  children: any;
  paddingLeft?: boolean;
}

const WrapperPage: FC<IWrapperPage> = (props) => {
  const styles = useStyles()

  return(
    <>
      <Header />
        <main className={props.paddingLeft === false ? clsx(styles.container) : clsx(styles.container, styles.padding)}>
          {props.children}
        </main>
      <Footer />
    </>
  )
}

WrapperPage.defaultProps = {
  paddingLeft: true
}

export default WrapperPage