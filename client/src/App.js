/** @jsxImportSource @emotion/react */
import Home from 'pages/Home';
import tw from 'twin.macro'


function App() {
  return (
    <div css={tw`bg-blue-200 w-screen h-screen`} >
      <Home/>
    </div>
  );
}

export default App;
