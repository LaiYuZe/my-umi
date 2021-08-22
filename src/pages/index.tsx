import { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [data] = useState([1, 2, 3]);
  return (
    <div>
      {data.map((item) => {
        return (
          <h1 key={item} className={styles.title}>
            Page index{item}
          </h1>
        );
      })}
    </div>
  );
}
