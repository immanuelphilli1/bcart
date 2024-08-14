import "./src/styles/global.css"

export const onClientEntry = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Mulish:wght@400;400i;600;600i;700;700i&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};