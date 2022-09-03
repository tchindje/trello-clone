import { useState } from "react";



import { AddNewItemButtonStyle } from "./styles";

//import from component to add another task
import {NewItemForm} from "./NewItemForm"

/*
This component will accept an item type and some text props for its buttons. Define
a type for its props:
*/

type AddNewItemProps = {
    onAdd (text : string) : void, //callback that will be called when we 
    //click the Create item button
    toggleButtonText : string, //  the text we’ll render when this component is a button
    dark? : boolean // flag  we’ll pass to the styled component.
}


//  AddNewItem component holds a showForm boolean state. 
 //When this state is true, we show an input with the “Create” button. 
 /// When it’s false, we render the button with toggleButtonText on it
//
export const AddNewItem = (props : AddNewItemProps) =>{
    const {onAdd, toggleButtonText, dark} = props;
    const   [showForm, setShowForm] = useState(false);

    if(showForm){
        //we show item creation form here 
        return (
            <NewItemForm onAdd={(text) =>  {onAdd(text)  } } />
        );

    }

    return (
        <AddNewItemButtonStyle dark={dark} onClick = {() => setShowForm(true)}>
            {toggleButtonText}
        </AddNewItemButtonStyle>
    );

}

