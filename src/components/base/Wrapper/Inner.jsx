/**
 * コンテンツのインナー
 */

import styles from './Inner.module.scss';

export default function Inner({ children, isSmall = false }) {
  return (
    <>
      <div className={isSmall ? styles.InnerSmall : styles.Inner}>{children}</div>
    </>
  );
}
