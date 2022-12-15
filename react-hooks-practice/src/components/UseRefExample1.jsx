import { useRef } from 'react';
const UseRefExample1 = () => {
   const inputRef = useRef();
   const onSubmit = e => {
      e.preventDefault();
      console.log(inputRef.current.value);
      //inputRef.current.value = 'hahah';
      inputRef.current.style.backgroundColor = inputRef.current.value;
   };
   return (
      <div>
         <h4>Example 1</h4>

         <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' ref={inputRef} id='name' className='form-control mb-2' />
            <button type='submit' className='btn btn-primary'>
               Submit
            </button>
         </form>
         <hr />
         <br />
      </div>
   );
};
export default UseRefExample1;
