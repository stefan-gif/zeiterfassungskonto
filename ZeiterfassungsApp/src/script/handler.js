

function handleEdit(field,setEditMode) {
  setEditMode((prev) => ({ ...prev, [field]: true }));
}
function handleChange(field,setUserData) {
  const { name, value } = field.target;
  setUserData((prev) => ({ ...prev, [name]: value }));
}
function handleBlur(field,setEditMode) {
  setEditMode((prev) => ({ ...prev, [field]: false }));
}
export { handleEdit, handleChange, handleBlur};