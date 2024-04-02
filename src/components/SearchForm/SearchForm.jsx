import { Field, Form, Formik } from "formik";
import css from './SearchForm.module.css'




const SearchForm = ({searchQuery,onHandleSubmit}) => {
    
 

    return (
       <Formik
      initialValues={{ query: searchQuery ?? "" }}
      onSubmit={(values) => {
        onHandleSubmit(values.query);
      }}
    >
      <Form>
        <Field className={css.field} placeholder="Search for movies..." type="text" name="query" />
        <button className={css.button} type="submit">Search</button>
      </Form>
    </Formik>
    //  
  )
}

export default SearchForm