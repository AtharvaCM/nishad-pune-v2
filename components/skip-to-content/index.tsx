import cx from 'classnames';

import styles from './skip-t-content.module.scss';

export default function SkipToContent() {
  return (
    <a href="#main-content" className={cx(styles['d-link'])} tabIndex={0}>
      Skip to content
    </a>
  );
}
