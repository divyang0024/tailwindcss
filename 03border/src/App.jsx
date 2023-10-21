import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <br />
      <span className='border-x-8 border-y-4 border-black  rounded-br-full border-dotted '>Hello there</span>
      {/*
        --border-radius-props--

        //rounded-sm:small radius <
        //rounded:normal radius <
        //rounded-md:medium radius <
        //rounded-lg:large radius <
        //rounded-xl:extra-large radius <
        //rounded-2xl:double-extra-large radius <
        //rounded-3xl:triple-extra-large radius <
        //rounded-full:9999px;

        --border-radius-position-props--
        
        //border-s/l-[size]:put radius on left top and bottom.
        //border-e/r-[size]:put radius on right top and bottom.
        //border-t-[size]:put radius on right and left top.
        //border-b-[size]:put radius on right and left bottom.

        //border-ss-[size]:y[s],x[e] top-right
        //border-ee-[size]:y[e],x[e] bottom-right
        //border-tr-[size]:y[t],x[r] top-right
        //border-br-[size]:y[b],x[r] bottom-right

        
        */}
    </>
  )
}

export default App
