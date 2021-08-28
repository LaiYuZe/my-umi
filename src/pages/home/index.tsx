import { useState } from 'react';

export default function IndexPage() {
  const [data] = useState([3, 2, 1]);
  return (
    <div>
      12345
      {data.map((item) => {
        return <h1 key={item}>home {item}</h1>;
      })}
    </div>
  );
}
