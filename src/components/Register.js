import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const Register = ({ register }) => {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const onSubmit = (event) => {
    event.preventDefault();
    register({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={onSubmit} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Register</button>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;

// class Register extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     };

//     this.onNameChange = this.onNameChange.bind(this);
//     this.onEmailChange = this.onEmailChange.bind(this);
//     this.onPasswordChange = this.onPasswordChange.bind(this);
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }

//   onNameChange(event) {
//     this.setState(() => {
//       return {
//         name: event.target.value,
//       };
//     });
//   }

//   onEmailChange(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChange(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     this.props.register({
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler} className="register-input">
//         <input
//           type="text"
//           placeholder="Nama"
//           value={this.state.name}
//           onChange={this.onNameChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={this.state.email}
//           onChange={this.onEmailChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           autoComplete="current-password"
//           value={this.state.password}
//           onChange={this.onPasswordChange}
//         />
//         <button>Register</button>
//       </form>
//     );
//   }
// }

// Register.propTypes = {
//   register: PropTypes.func.isRequired,
// };

// export default Register;
