import React from 'react';
import styles from './Link.module.scss';
import { AiFillFolder } from 'react-icons/ai';
import { LinkProps } from '../../interfacesTypes/LinkProps';

export const Link: React.FC<LinkProps> = ({ href, text }) => {
  return (
    <div className={styles.link}>
      <AiFillFolder color="#ccc" />
      <a href={href}>{text}</a>
    </div>
  );
};
