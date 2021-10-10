export type TResetPasswordScreenProps = {};

export type TResetPasswordScreenViewProps = {
  userEmail: string;
  emailError: string | undefined;
  setUserEmail: Function;
  onPressSendResetPassword: Function;
};
