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
