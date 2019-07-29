import React from 'react';
import { item, active } from './Repo.module.sass';
import RepoInfo from '../RepoInfo';
import RepoDescription from '../RepoDescription';
import TinyCollapse from "react-tiny-collapse";

export default ({ repo, isActive, handleClick }) => {
  const { id, description } = repo;

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <li onClick={() => handleClick(id)} onMouseDown={handleMouseDown} className={`${item} ${isActive && active}`}>
      <RepoInfo repo={repo} />
      <TinyCollapse isOpen={isActive}>
        <RepoDescription description={description} />
      </TinyCollapse>
    </li>
  );
};
