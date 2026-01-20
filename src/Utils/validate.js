export const checkValidData = (email, password) => {
  const isemailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const ispasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password,
  );
  if (!isemailValid) {
    return "Email is not valid";
  }
  if (!ispasswordValid) {
    return "Password is not valid";
  }
  return null;
};
