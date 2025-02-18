export const POST_CONTACT_FORM = async (fields) => {
  const url = "https://api.web3forms.com/submit";
  const formData = {
    ...fields,
    subject: "New submission from Watch Design",
    access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
  };
  // console.log("formData", formData);
  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });
  result = await result.json();
  // console.log("result", result);
  if (result.success) return true;
};
