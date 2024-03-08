import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormReducer from "./FormReducer";

const initialState = {
  title: '',
  openingText: '',
  releaseDate: '',
}

const AddForm = (props) => {
  const [state, dispatch] = useReducer(FormReducer, initialState);

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
      if(state.title.trim()==='' || state.openingText.trim()==='' || state.releaseDate.trim()==='')
        return alert('kindly fill all the fields');
      const movieObj = {
        title: state.title.trim(),
        openingText: state.openingText.trim(),
        releaseDate: state.releaseDate.trim(),
      }
      props.onSubmit(movieObj);

      //clear the form fields
      dispatch({type: 'CLEAR_FORM'});
  }

  return (
    <Form onSubmit={(e)=>formSubmitHandler(e)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label className="text-start">Title</Form.Label>
        <Form.Control type="text" name="title" value={state.title} onChange={(e)=>formControlChangeHandler(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicOpeningText">
        <Form.Label>Opening Text</Form.Label>
        <Form.Control type="text" name="openingText" value={state.openingText} onChange={(e)=>formControlChangeHandler(e)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRelease">
        <Form.Label>Release Date</Form.Label>
        <Form.Control type="text" name="releaseDate" value={state.releaseDate} onChange={(e)=>formControlChangeHandler(e)} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

export default React.memo(AddForm);
