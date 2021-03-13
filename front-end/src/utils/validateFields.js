const checkString = (value) => typeof(value) == 'string' && value.length > 0;
const checkInt = (value) => Number.isInteger(value);

export { checkString, checkInt }
