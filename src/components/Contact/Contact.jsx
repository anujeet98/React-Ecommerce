import { useReducer } from "react";
import { Button, Form } from "react-bootstrap"

const initialState = {
    name: '',
    email: '',
    phone: '',
  }

const FormReducer = (state, action) => {
    if(action.type==='CLEAR_FORM'){
        const newState = {...state};
        Object.keys(newState).forEach((i) => newState[i] = '');
        return newState;
    }
    else if(action.type==='FORM_CHANGE') {
        return {
            ...state,
            [action.field]: action.value
        }
    }
}
  
const Contact = () => {
    const [state, dispatch] = useReducer(FormReducer, initialState);

    const postDataHandler = async(data) => {
        try{
            const resp = await fetch('https://react-http-85467-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!resp.ok)
                throw new Error('something went wrong...');
            alert('Contact sent successfully');
        }
        catch(err){
            return alert(err.message);
        }
    }
  
    const formControlChangeHandler = (e, fieldParam=e.target.name, valueParam=e.target.value) => {
        // const dispatchType = e.target.name==='title' ? 'TITLE' : e.target.name==='OPENING_TEXT' ? 'OPENING_TEXT' : 'RELEASE_DATE';
        dispatch({
          type: 'FORM_CHANGE',//dispatchType,
          field: fieldParam,
          value: valueParam,
        });
    }
    
    const formSubmitHandler = (e) => {
      e.preventDefault();
        const name = state.name.trim();
        const email = state.email.trim();
        const phone = state.phone.trim();
        if(name==='' || email==='' || phone==='')
          return alert('kindly fill all the fields');
        if(!(/^\d{10}$/).test(phone))
          return alert('phone number must be 10 digit');


        const contactObj = {
          name: name,
          email: email,
          phone: phone,
        }
        postDataHandler(contactObj);
  
        //clear the form fields
        dispatch({type: 'CLEAR_FORM'});
    }

    return (
        <Form onSubmit={(e)=>formSubmitHandler(e)} className="container mt-5 pt-5">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="text-start">Name</Form.Label>
                <Form.Control type="text" name="name" value={state.name} onChange={(e)=>formControlChangeHandler(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={state.email} onChange={(e)=>formControlChangeHandler(e)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" name="phone" value={state.phone} onChange={(e)=>formControlChangeHandler(e)} required/>
            </Form.Group>
            <Button variant="primary" type="submit">submit</Button>
        </Form>
    )
}

export default Contact;