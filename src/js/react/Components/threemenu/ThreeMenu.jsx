import React from 'react'
import MenuList from "./menu-list.jsx";
import './index.scss'
import data from './data.js'
export default function TreeView({ menus = data }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}