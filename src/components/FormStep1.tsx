import { useEffect, useState } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import deLocale from "date-fns/locale/de";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { ActionType } from "reducer/userDataReducer";
import Progress from "helper/progress";
import "styles/FormStep1.css";

function FormStep1() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);

  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  const isNameValid = (value: string | undefined): boolean => {
    if (!value) return true;

    if ((value.length ?? 0) == 0) return true;
    return nameRegex.test(value ?? "");
  };

  const emailRegex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");
  const isEmailValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;

    if ((value.length ?? 0) == 0) return true;
    return emailRegex.test(value ?? "");
  };

  const phoneRegex = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  const isPhoneValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;

    if ((value.length ?? 0) == 0) return true;
    return phoneRegex.test(value ?? "");
  };

  const isNumberValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;
    return !isNaN(Number(value));
  };

  const isStreetNumberValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;
    return (value?.length ?? 0) > 0 && (value?.length ?? 0) < 5;
  };

  const isPLZValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;
    return (value?.length ?? 0) > 0 && (value?.length ?? 0) < 7;
  };

  const isStreetValid = (value: string | undefined): boolean => {
    if (showErrorState && (value?.length ?? 0) == 0) return false;
    if (!value) return true;
    return (value?.length ?? 0) > 2 && (value?.length ?? 0) < 20;
  };

  const [dateInputValid, setDateInputValid] = useState(true);
  const isDateValid = (value: string | undefined): boolean => {
    if (showErrorState && !value) return false;
    if (!value) return true;
    return dateInputValid;
  };

  const isFormValid = (): boolean => {
    const validities = [
      isNameValid(userData.firstname),
      isNameValid(userData.lastname),
      isNumberValid(userData.svnr),
      isDateValid(userData.birthDate),
      isNameValid(userData.placeOfBirth),
      isPLZValid(userData.plz),
      isNameValid(userData.town),
      isStreetValid(userData.street),
      isStreetNumberValid(userData.streetNumber),
      isPhoneValid(userData.phone),
      isEmailValid(userData.email),
    ];
    return validities.reduce((result, bool) => {
      return result && bool;
    }, true);
  };

  const missingMessage = (
    data: string | undefined,
    fallback: string
  ): string => {
    if (showErrorState && (data ?? "").length == 0) return "Missing field";

    return fallback;
  };

  useEffect(() => {
    dispatch({
      type: ActionType.UpdateUserData,
      payload: {
        newData: {
          ...userData,
          birthDate: new Date().toISOString(),
          validStudentData: isFormValid(),
        },
      },
    });
  }, []);

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
                  newData: {
                    ...userData,
                    firstname: e.target.value,
                    validStudentData: isFormValid(),
                  },
                },
              });
            }}
            placeholder="John"
            helperText={
              isNameValid(userData.firstname)
                ? undefined
                : missingMessage(userData.firstname, "Only letters allowed")
            }
            error={!isNameValid(userData.firstname)}
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
                  newData: {
                    ...userData,
                    lastname: e.target.value,
                    validStudentData: isFormValid(),
                  },
                },
              });
            }}
            placeholder="Doe"
            helperText={
              isNameValid(userData.lastname)
                ? undefined
                : missingMessage(userData.lastname, "Only letters allowed")
            }
            error={!isNameValid(userData.lastname)}
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
                    newData: {
                      ...userData,
                      svnr: e.target.value,
                      validStudentData: isFormValid(),
                    },
                  },
                });
              }}
              placeholder="12345678"
              helperText={
                isNumberValid(userData.svnr)
                  ? undefined
                  : missingMessage(userData.svnr, "Only digits allowed")
              }
              error={!isNumberValid(userData.svnr)}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="date-picker">
                <DesktopDatePicker
                  label="Date of Birth"
                  minDate={new Date("1900-01-01")}
                  maxDate={new Date()}
                  onChange={(newValue) => {
                    dispatch({
                      type: ActionType.UpdateUserData,
                      payload: {
                        newData: {
                          ...userData,
                          birthDate: newValue?.toISOString(),
                          validStudentData: isFormValid(),
                        },
                      },
                    });
                  }}
                  onError={(t) => {
                    setDateInputValid(t == null);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={
                        isDateValid(userData.birthDate)
                          ? undefined
                          : missingMessage(
                              userData.birthDate,
                              "Insert date in format 14/01/2020"
                            )
                      }
                    />
                  )}
                  value={userData.birthDate}
                />
              </div>
            </LocalizationProvider>
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
                  newData: {
                    ...userData,
                    placeOfBirth: e.target.value,
                    validStudentData: isFormValid(),
                  },
                },
              });
            }}
            placeholder="London"
            helperText={
              isNameValid(userData.placeOfBirth)
                ? undefined
                : missingMessage(userData.placeOfBirth, "Only letters allowed")
            }
            error={!isNameValid(userData.placeOfBirth)}
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
                    newData: {
                      ...userData,
                      plz: e.target.value,
                      validStudentData: isFormValid(),
                    },
                  },
                });
              }}
              placeholder="1010"
              helperText={
                isPLZValid(userData.plz)
                  ? undefined
                  : missingMessage(
                      userData.plz,
                      "Enter Postcal Code between 1 and 6 digits"
                    )
              }
              error={!isPLZValid(userData.plz)}
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
                    newData: {
                      ...userData,
                      town: e.target.value,
                      validStudentData: isFormValid(),
                    },
                  },
                });
              }}
              placeholder="London"
              helperText={
                isNameValid(userData.town)
                  ? undefined
                  : missingMessage(userData.town, "Only letters allowed")
              }
              error={!isNameValid(userData.town)}
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
                    newData: {
                      ...userData,
                      street: e.target.value,
                      validStudentData: isFormValid(),
                    },
                  },
                });
              }}
              placeholder="Baker Street"
              helperText={
                isStreetValid(userData.street)
                  ? undefined
                  : missingMessage(
                      userData.street,
                      "Enter value between 3 and 20 length"
                    )
              }
              error={!isStreetValid(userData.street)}
            />
            <TextField
              className="quarter"
              variant="outlined"
              label="Street Nr."
              type="text"
              value={userData.streetNumber}
              onChange={(e) => {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: {
                      ...userData,
                      streetNumber: e.target.value,
                      validStudentData: isFormValid(),
                    },
                  },
                });
              }}
              placeholder="14"
              helperText={
                isStreetNumberValid(userData.streetNumber)
                  ? undefined
                  : missingMessage(
                      userData.streetNumber,
                      missingMessage(
                        userData.streetNumber,
                        "Enter number between 1 and 4 digits"
                      )
                    )
              }
              error={!isStreetNumberValid(userData.streetNumber)}
            />
          </div>
        </div>
        <div className="row">
          <TextField
            className="grow-1"
            variant="outlined"
            label="Phone Number"
            type="text"
            value={userData.phone}
            onChange={(e) => {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: {
                    ...userData,
                    phone: e.target.value,
                    validStudentData: isFormValid(),
                  },
                },
              });
            }}
            placeholder="0123 12304123"
            helperText={
              isPhoneValid(userData.phone)
                ? undefined
                : missingMessage(
                    userData.phone,
                    "Enter phone like: +43123445678. (10 - 12 digits)"
                  )
            }
            error={!isPhoneValid(userData.phone)}
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
                  newData: {
                    ...userData,
                    email: e.target.value,
                    validStudentData: isFormValid(),
                  },
                },
              });
            }}
            placeholder="sendlove@treeuniversity.com"
            helperText={
              isEmailValid(userData.email)
                ? undefined
                : missingMessage(userData.email, "Email is not valid")
            }
            error={!isEmailValid(userData.email)}
          />
        </div>
      </div>
    </div>
  );
}

export default FormStep1;
