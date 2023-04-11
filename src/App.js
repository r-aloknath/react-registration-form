import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialValues = {
    firstname: "",
    midname: "",
    lastname: "",
    email: "",
    gender: "male",
    maritalstatus: "unmarried",
    mobile: "",
    building: "",
    area: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    password: "",
    re_password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const stringRegex = /^[a-zA-Z]*$/;

    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if(!values.gender){
      errors.gender = "Gender is required";
    }
    
    if(!values.maritalstatus){
      errors.maritalstatus = "Marital Status is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.re_password) {
      errors.re_password = "Re-enter Password is required";
    } else if (values.password != values.re_password) {
      errors.re_password = "Must be same as password";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Mobile must be 10 numbers";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Mobile must be 10 numbers";
    }

    if (!values.building) {
      errors.building = "BLock/House No required";
    }

    if (!values.area) {
      errors.area = "Area/Locality required";
    }

    if (!values.city) {
      errors.city = "City required";
    } else if (!stringRegex.test(values.city)) {
      errors.city = "City can't have numbers or special character ";
    }

    if (!values.district) {
      errors.district = "District required";
    } else if (!stringRegex.test(values.district)) {
      errors.district = "District can't have numbers or special character ";
    }

    if (!values.pincode) {
      errors.pincode = "Pincode required";
    } else if (values.pincode.length < 6 || values.pincode.length > 6) {
      errors.pincode = "Pincode must be 6 digits";
    }

    if (!values.state) {
      errors.state = "State required";
    } else if (!stringRegex.test(values.state)) {
      errors.state = "State can't have numbers or special character ";
    }

    return errors;
  };

  const reset = () => {
    setIsSubmit(false);
    setFormValues(initialValues);
    setFormErrors({});
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-message">
          Signed in successfully
          {/* {JSON.stringify(formValues, undefined, 2)} */}
          <button className="close-btn" onClick={reset}>
            close
          </button>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>

        {/* name fields */}
        <div className="fields">
          <div className="field">
            <label>Firstname</label>
            <input
              className="input"
              type="text"
              name="firstname"
              placeholder="Ex. Hitesh"
              value={formValues.firstname}
              onChange={handleChange}
            />
            <p>{formErrors.firstname}</p>
          </div>

          <div className="field">
            <label>Middle Name</label>
            <input
              type="text"
              name="midname"
              placeholder="Ex. Kumar"
              value={formValues.midname}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Ex. Choudhury"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* personal status fields */}
        <div className="fields">
        <div className="field">
            <label>Gender</label>
            <select 
            name="gender" 
            value={formValues.gender} 
            placeholder="Ex. Male/Female/Other"
            onChange={handleChange}
            style={{width: "194px"}}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <p>{formErrors.gender}</p>
          </div>

          <div className="field">
            <label>Marital Status</label>
            <select 
            name="maritalstatus" 
            value={formValues.maritalstatus} 
            placeholder="Ex. Male/Female/Other"
            onChange={handleChange}
            style={{width: "194px"}}
            >
              <option value="unmarried">Unmarried</option>
              <option value="married">Married</option>
              <option value="divorcee">Divorcee</option>
            </select>
            <p>{formErrors.maritalstatus}</p>
          </div>
        </div>

        {/* contact fields */}
        <div className="fields">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Ex. example@email.com"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>

          <div className="field">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              placeholder="Ex. 0123456789"
              value={formValues.mobile}
              onChange={handleChange}
            />
            <p>{formErrors.mobile}</p>
          </div>
        </div>

        {/* adress fields */}
        <div className="fields">
          <div className="field">
            <label>BLock/House No</label>
            <input
              type="text"
              name="building"
              placeholder="Ex. Saswat Homes B 308"
              value={formValues.building}
              onChange={handleChange}
            />
            <p>{formErrors.building}</p>
          </div>

          <div className="field">
            <label>Area/Locality</label>
            <input
              type="text"
              name="area"
              placeholder="Ex. Sampark Vihar"
              value={formValues.area}
              onChange={handleChange}
            />
            <p>{formErrors.area}</p>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Ex. Bhubaneswar"
              value={formValues.city}
              onChange={handleChange}
            />
            <p>{formErrors.city}</p>
          </div>

          <div className="field">
            <label>District</label>
            <input
              type="text"
              name="district"
              placeholder="Ex. Khordha"
              value={formValues.district}
              onChange={handleChange}
            />
            <p>{formErrors.district}</p>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label>Pincode</label>
            <input
              type="number"
              name="pincode"
              placeholder="Ex. 751024"
              value={formValues.pincode}
              onChange={handleChange}
            />
            <p>{formErrors.pincode}</p>
          </div>

          <div className="field">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="Ex. Odisha"
              value={formValues.state}
              onChange={handleChange}
            />
            <p>{formErrors.state}</p>
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>

          <div className="field">
            <label>Re-enter password</label>
            <input
              type="password"
              name="re_password"
              placeholder="Re-enter Password"
              value={formValues.re_password}
              onChange={handleChange}
            />
            <p>{formErrors.re_password}</p>
          </div>
        </div>

        <button className="signin-btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
