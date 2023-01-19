/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import { FiPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import Button from "components/Button";
import Input from "components/Input";

function AddList() {
  const [isIdle, setIsIdle] = useState(true);
  const [value,setValue]=useState('')
  const refAddList= useRef(null);
  const handleOpen = (e) => {
    e.stopPropagation();
    setIsIdle(!isIdle);
  };
  useEffect(()=>{
    const listenForm =(event)=>{
      if(!refAddList.current?.contains(event.target)){
        setIsIdle(true)
      }
    }
    if(!isIdle){
      document.addEventListener('click',listenForm);
    }
    return ()=>{
      document.removeEventListener('click',listenForm)
    }
  },[isIdle])
  return (
    <div className={`list-wrapper mod-add ${isIdle ? "is-idle" : ""}`}>
      {isIdle ? (
        <p
          className="open-add-list js-open-add-list"
          tabIndex={0}
          onClick={handleOpen}
        >
          <span className="placeholder">
            <Button href="#" css={tw`text-white  px-1 py-2 text-sm w-full`}>
              <FiPlus />
              <span>Add another list</span>
            </Button>
          </span>
        </p>
      ) : (
        <form ref={refAddList}>
          <input
            tw="w-full bg-white shadow-[#0079bf] ring-[2px]"
            autoComplete="off"
            maxLength="512"
            type="text"
            autoFocus
            placeholder="Enter list title..."
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
          <div
            css={[
              tw`mt-1 h-8`,
              css`
                transition: margin 85ms ease-in, height 85ms ease-in;
              `,
            ]}
          >
            <Input type="submit" value="Add list" tw="mr-1.5" />
            <Button href="#" onClick={handleOpen}>
              <GrClose />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddList;
