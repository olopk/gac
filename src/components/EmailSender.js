import emailjs from "emailjs-com";

export const sendEmail = (data) => {
  console.log(data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 3000);
  });
  // emailjs
  //   .send(
  //     "service_uwimm4e",
  //     "template_h9ngt53",
  //     {
  //       email_data: `<p>imie: jerzy</p>`,
  //     },
  //     "user_tXSIHfj93PnUzRkh8tRTM"
  //   )
  //   .then(
  //     function (response) {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     function (error) {
  //       console.log("FAILED...", error);
  //     }
  //   );
};
