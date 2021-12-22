import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

const BookingForm = ({SummaryDetails, modalIsOpen, closeModal}) => {

    const {name} =SummaryDetails;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const addToLocalstorage = localStorage.setItem("user booking info",data)
        console.log(data, addToLocalstorage)
        closeModal();
    };
  
    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <h2 className="text-brand text-center" >{name}</h2>
       
        <form className="" onSubmit={handleSubmit(onSubmit)}> 
        <div className="form-group"> 
      <input {...register("name", { required: true })}  placeholder="Your Name" className="form-control form-label"/>
      </div>   
      <div className="form-group"> 
      <input {...register("phone", { required: true })}  placeholder="Your Phone Number" className="form-control form-label"/>
     
      </div> 
      <div className="form-group"> 
      <input {...register("exampleRequired", { required: true })}  placeholder="Your email" className="form-control form-label"/>
    
      </div> 
      <div className="form-group row">
      <div className="col-4">
          <select {...register("gender")} className="form-control"  >
            <option>Select Gender</option>
            <option>male</option>
            <option>female</option>
            <option>other</option>
          </select>

      </div>
      <div className="col-4">
      <div className="form-group"> 
      <input {...register("age")}  placeholder=" age" className="form-control "/>
      </div>
      </div>
      <div className="col-4">
      <div className="form-group"> 
      <input {...register("waight")}  placeholder=" waight" className="form-control "/>
      </div>
      </div>
      </div>
      
     
      
      <div className="form-group text-left">
         <button type="submit" className="btn btn-primary">Send</button>
         
     </div>
    </form>
      </Modal>
        </div>
    );
};

export default BookingForm;