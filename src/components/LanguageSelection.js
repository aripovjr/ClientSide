import React from "react";
import { Dropdown } from "react-bootstrap";

function LanguageSelection() {
  return (
    <Dropdown>
      <Dropdown.Toggle>Languages</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>UK 🇬🇧</Dropdown.Item>
        <Dropdown.Item>PL 🇵🇱</Dropdown.Item>
        <Dropdown.Item>UZ 🇺🇿</Dropdown.Item>
        <Dropdown.Item>SA 🇸🇦</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelection;
