import Content from 'components/Content/Content';
import React from 'react';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={`${styles.wrapper}`}>
      <Content />
    </div>
  );
}

export default HomePage;
