import { Fragment } from "react";
// import { Container } from "react-bootstrap";
// import classes from './Cart.module.css';
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
    return (
        <div className={props.className}>
            <div className="">{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlay');
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay onCloseModal={props.onCloseModal} className={props.className}>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;













// // import { Fragment } from "react";
// import { useEffect, useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// // import ReactDOM from "react-dom";

// // const ModalOverlay = (props) => {
// //     return (
// //         <div>
// //             <div>{props.children}</div>
// //         </div>
// //     );
// // }
// // const portalElement = document.getElementById('overlay');

// const Cart = ({showCart, onHide}) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => {
//     setShow(false);
//     onHide();
//   }
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     if(showCart)
//         handleShow();
//     // setShow(props.showCart);
//   }, [showCart]);

//   return (
//     <Modal show={show} onHide={handleClose} className="ms-5">
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Cart;
