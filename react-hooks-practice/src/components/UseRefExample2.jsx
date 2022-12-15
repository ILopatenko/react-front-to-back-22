import { useRef, useState, useEffect } from 'react';
const UseRefExample2 = () => {
   const [name, setName] = useState('');
   const renders = useRef(1);
   const prevName = useRef('');

   useEffect(() => {
      renders.current++;
      prevName.current = name;
   }, [name]);

   return (
      <>
         <h4>Example 2</h4>
         <h1>Renders: {renders.current}</h1>
         <h2>Prev Name State: {prevName.current}</h2>
         <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            className='form-control mb-3'
         />
         <hr />
         <br />
      </>
   );
};
export default UseRefExample2;
