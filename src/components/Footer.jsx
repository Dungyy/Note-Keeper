import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <br/>
      <p>Made by Dungy</p>
    </footer>
  );
}

