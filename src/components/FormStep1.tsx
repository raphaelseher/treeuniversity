import { useEffect } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { ActionType } from "reducer/userDataReducer";
import Progress from "helper/progress";
import "styles/FormStep1.css";

function FormStep2() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);

  // regex used for validation of input
  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  let isNameValid: boolean =
    (userData?.firstname?.length ?? 0) == 0
      ? true
      : nameRegex.test(userData?.firstname ?? "");

  return (
    <div id="step1">
      <FormStepTitle step={Step.Step1} title="Step 1: Student Data" />
      <div id="step1-content">
        <div className="row">
          <TextField
            className="grow-1"
            variant="outlined"
            label="Firstname"
            type="name"
            value={userData.firstname}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: { ...userData, firstname: e.target.value },
                },
              });
            }}
            placeholder="John"
            helperText={
              isNameValid ? undefined : "Keine Sonderzeichen verwenden"
            }
            error={!isNameValid}
          />
          <TextField
            className="grow-1"
            variant="outlined"
            label="Lastname"
            type="name"
            value={userData.lastname}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: { ...userData, lastname: e.target.value },
                },
              });
            }}
            placeholder="Doe"
            helperText={
              isNameValid ? undefined : "Keine Sonderzeichen verwenden"
            }
            error={!isNameValid}
          />
        </div>
        <div className="row">
          <div className="group grow-1">
            <TextField
              className="quarter"
              variant="outlined"
              label="SVNR"
              type="name"
              value={userData.svnr}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, svnr: e.target.value },
                  },
                });
              }}
              placeholder="John"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
            <TextField
              className="grow-1"
              variant="outlined"
              label="Date of Birth"
              type="name"
              value={
                userData.birthDate &&
                new Date(userData.birthDate).toLocaleDateString()
              }
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, birthDate: e.target.value },
                  },
                });
              }}
              placeholder="Doe"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
          </div>
          <TextField
            className="half"
            variant="outlined"
            label="Place of Birth"
            type="name"
            value={userData.placeOfBirth}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: { ...userData, placeOfBirth: e.target.value },
                },
              });
            }}
            placeholder="Doe"
            helperText={
              isNameValid ? undefined : "Keine Sonderzeichen verwenden"
            }
            error={!isNameValid}
          />
        </div>
        <div className="row">
          <div className="group grow-1">
            <TextField
              className="quarter"
              variant="outlined"
              label="PLZ"
              type="name"
              value={userData.plz}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, plz: e.target.value },
                  },
                });
              }}
              placeholder="John"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
            <TextField
              className="grow-1"
              variant="outlined"
              label="Town"
              type="name"
              value={userData.town}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, town: e.target.value },
                  },
                });
              }}
              placeholder="London"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
          </div>
          <div className="group grow-1">
            <TextField
              className="grow-1"
              variant="outlined"
              label="Street"
              type="name"
              value={userData.street}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, street: e.target.value },
                  },
                });
              }}
              placeholder="Baker Street"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
            <TextField
              className="quarter"
              variant="outlined"
              label="Street Nr."
              type="number"
              value={userData.streetNumber}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: { ...userData, streetNumber: e.target.value },
                  },
                });
              }}
              placeholder="14"
              helperText={
                isNameValid ? undefined : "Keine Sonderzeichen verwenden"
              }
              error={!isNameValid}
            />
          </div>
        </div>
        <div className="row">
          <TextField
            className="grow-1"
            variant="outlined"
            label="Phone Number"
            type="tel"
            value={userData.phone}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: { ...userData, phone: e.target.value },
                },
              });
            }}
            placeholder="0123 12304123"
            helperText={
              isNameValid ? undefined : "Keine Sonderzeichen verwenden"
            }
            error={!isNameValid}
          />
          <TextField
            className="grow-1"
            variant="outlined"
            label="E-Mail"
            type="email"
            value={userData.email}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: { ...userData, email: e.target.value },
                },
              });
            }}
            placeholder="Doe"
            helperText={
              isNameValid ? undefined : "Keine Sonderzeichen verwenden"
            }
            error={!isNameValid}
          />
        </div>
      </div>
    </div>
  );
}

export default FormStep2;
