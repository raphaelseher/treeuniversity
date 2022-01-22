import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import TextField from "@mui/material/TextField";
import FormStep2 from "components/FormStep2";
import FormStep3 from "components/FormStep3";

interface RegisterFormProps {}

function RegisterForm(props: RegisterFormProps) {
  // Saving our data to the browsers local storage. This works like `useState`.
  // userData is the data to use in the component. setUserData used to change the values.
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;

  // regex used for validation of input
  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  let isNameValid: boolean =
    (userData?.firstname?.length ?? 0) == 0
      ? true
      : nameRegex.test(userData?.firstname ?? "");

  return (
    <div id="form-content">
      <TextField
        variant="outlined"
        label="Vorname"
        type="name"
        value={userData.firstname}
        onChange={(e) => {
          // this will automatically save all the data to the local storage.
          // Check it with developer tools (F12 or Control+Shift+I)
          // { ...userData, [new values,]} is the Javascript Spread Operator
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          dispatch({
            type: ActionType.UpdateUserData,
            payload: {
              newData: { ...userData, firstname: e.target.value },
            },
          });
        }}
        placeholder="Vorname eintragen"
        helperText={isNameValid ? undefined : "Keine Sonderzeichen verwenden"}
        error={!isNameValid}
      />

      <FormStep2 />
      <FormStep3 />
    </div>
  );
}

export default RegisterForm;
