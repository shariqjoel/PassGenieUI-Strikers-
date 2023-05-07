import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PasswordsList from './Pages/PasswordsList';
import './App.css';
import { Label } from 'reactstrap';

const App = () => {
  const MySwal = withReactContent(Swal);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    MySwal.fire({
      title: 'Form Data',
      html: `
        <p><strong>Username:</strong> ${formData.username}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Password:</strong> ${formData.password}</p>
        <p><strong>Confirm Password:</strong> ${formData.confirmPassword}</p>
      `
    });
  }

  const handleClick = () => {
    MySwal.fire({
      title: 'Add Password',
      html: `


        <div class="my-title-class">Say goodbye to password anxiety</div>
        <div>
        <label  class="my-label-class" for="password">USER NAME</label>
        <input type="text" name="username" placeholder="User Name" class="swal2-input my-input-class" required>
        </div>
        <div>
        <label  class="my-label-class" for="password">WEBSITE NAME</label>
        <input type="email" name="email" placeholder="Website Name" class="swal2-input my-input-class" required>
        </div>
        <div>
        <label class="my-label-class" for="password">WEBSITE LINK</label>
        <input type="password" name="password" placeholder="Website Link" class="swal2-input my-input-class" required>
        </div>

        <div>
        <label class="my-label-class" for="password">SET PASSWORD</label>
        <input type="password" name="confirmPassword" placeholder="Password" class="swal2-input my-input-class" required>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Submit',

      customClass: {
        container: 'my-modal-class',
        closeButton: 'swal2-close',
      },
      preConfirm: () => {
        return {
          username: MySwal.getPopup().querySelector('[name="username"]').value,
          email: MySwal.getPopup().querySelector('[name="email"]').value,
          password: MySwal.getPopup().querySelector('[name="password"]').value,
          confirmPassword: MySwal.getPopup().querySelector('[name="confirmPassword"]').value,
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData(result.value);
      }
    })
  }


  return (
    <>
      <button className="plus-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <label class="my-label1-class" for="password">Add New</label>
  
    <PasswordsList/>      

    </>
  )
}

export default App;
