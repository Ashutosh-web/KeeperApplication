import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <b>Copyright ⓒ {year} Ashutosh Kumar</b>
      </p>
      <p>
        <b>ReactJs HTML CSS JavaScript</b>
      </p>
    </footer>
  );
}

export default Footer;
