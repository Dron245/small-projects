import { useState } from "react";
import MenuList from "./menu-list.jsx";
import {FaMinus, FaPlus} from 'react-icons/fa'
import React from 'react'
{
	let qwe = 5
	let asd =!qwe
	console.log(asd)
}
export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
	  console.log(displayCurrentChildren[getCurrentlabel])
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
	});
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
            }
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList  list={item.children} />
      ) : null}
    </li>
  );
}