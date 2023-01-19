import tw, { css } from "twin.macro";
const styles = {
  mainBoard: () => [
    css`
      & form {
        ${tw`w-full`}
      }
      & .list-wrapper {
        ${tw`box-border inline-flex align-top w-[272px]`}
        &:first-of-type {
          ${tw`ml-3`}
        }
        &:last-child {
          ${tw`mr-3`}
        }
        &.mod-add{
        ${tw`rounded-[3px] h-auto min-h-[32px] p-2`}
        background-color:#ebecf0;
        transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
        & .placeholder{
            display:none
        }
        &.is-idle{
            background-color:#ffffff3d;
            cursor: pointer;
            & .placeholder{
                display:block
            }
        }
    }
      }
    `,
  ],
};
export default styles;
