import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './nav.module.scss';

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter();

  let className = children.props.className || '';

  if (pathname === href) {
    className = styles.active;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
