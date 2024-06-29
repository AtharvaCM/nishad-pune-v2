import { Section } from '@radix-ui/themes';
import cx from 'classnames';
import { FC } from 'react';

import styles from './audience-feedback-block.module.scss';

interface IAudienceFeedbackBlockProps {}

const AudienceFeedbackBlock: FC<IAudienceFeedbackBlockProps> = () => <Section className={cx(styles['d-section'])}>feedback block</Section>;

export default AudienceFeedbackBlock;
