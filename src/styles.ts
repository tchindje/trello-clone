import styled from "styled-components";

//Here we defined all the components styled that we will go to use
// to style our application components :

/**
 *  Here we specify display: flex to make it use the flexbox layout. 
 *   We set flex-direction property to row, to arrange 
 *    our items horizontally. And we add a 20px padding inside
    it.
 */
export const AppContainerStyle = styled.div`
    display : flex;
    align-items : flex-start;
    flex-direction : row;
    background-color : #3179ba;
    height : 100%,
    padding : 20px;
    width : 100%
`;

/**
 *  Here we specify a grey background, margins, and paddings, and also specify
    flex-grow: 0 so the component doesn’t try to take up all the horizontal space
 */
export const ColumnContainerStyle = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

/*We’ll use it to wrap our column’s title*/
export const ColumnTitleStyle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

/*
    Here we want to let the user know that cards are interactive 
    so we specify cursor: pointer.
     We also want our cards to look nice so we add a box-shadow
*/
export const CardContainerStyle = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding : 5px 10px
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

// component that will allow us to create new items.
type AddItemButtonProps = {
  dark?: boolean; // flag to set background color ( dark or white)
};

//we define the AddNewItemButton styled-component:
// depending of flag dark receiving from the props
// et set a appropriate color
export const AddNewItemButtonStyle = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 10px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

// style for our form component.
export const NewItemFormContainerStyle = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-item: flex-start;
`;

//style for button component inside the NewItemFormcontainer
//We want our button to be green and have nice rounded corners.
export const NewItemButtonStyle = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  width: 100px;
  text-align: center;
`;

//style for input component inside the NewItemFormcontainer
export const NewItemInputStyle = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5em 1rem;
  width: auto;
`;
