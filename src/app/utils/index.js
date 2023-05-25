export const classNames = (...args) => {
  return args.join(" ");
};

export const isSticky = () => {
  const header = document.querySelector(".headerWrapper");
  const scrollTop = window.scrollY;
  scrollTop >= 250
    ? header.classList.add("is-sticky")
    : header.classList.remove("is-sticky");
};
export async function verifyRecaptcha(token) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",

      body: JSON.stringify({
        params: {
          secret: "6LfFcswkAAAAAOxwW6I-T8jtBXjIO56smkiHjEf6",
          response: token,
        },
      }),
    }
  );
  return response.data.success;
}
