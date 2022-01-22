import { useUserDataContext } from "context/UserDataContext";
import FormStep1 from "components/FormStep1";
import FormStep2 from "components/FormStep2";
import FormStep3 from "components/FormStep3";
import FormStep4 from "components/FormStep4";

interface RegisterFormProps {}

function RegisterForm(props: RegisterFormProps) {
  // Saving our data to the browsers local storage. This works like `useState`.
  // userData is the data to use in the component. setUserData used to change the values.
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;

  return (
    <div id="form-content">
      <FormStep1 />
      <FormStep2 />
      <FormStep3 />
      <FormStep4 />
    </div>
  );
}

export default RegisterForm;
