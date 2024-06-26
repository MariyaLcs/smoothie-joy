import Link from 'next/link';
import styles from '../styles/Custom404.module.css';

export default function Custom404 ()
{
  return (
    <div className={ styles.container }>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link href="/">
        <a className={ styles.homeLink }>Go back home</a>
      </Link>
    </div>
  );
}
