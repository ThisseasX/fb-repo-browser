import React, { useState } from 'react';
import { item, active } from './Repo.module.sass';
import RepoInfo from '../RepoInfo/RepoInfo';
import RepoDescription from '../RepoDescription/RepoDescription';
import TinyCollapse from "react-tiny-collapse";

export default ({ repo }) => {
  const { description } = repo;

  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <li onClick={handleClick} onMouseDown={handleMouseDown} className={`${item} ${isActive && active}`}>
      <RepoInfo repo={repo} />
      <TinyCollapse isOpen={isActive}>
        <RepoDescription description={description} />
      </TinyCollapse>
    </li>
  );
};
