import React from 'react';
import PropTypes from 'prop-types';
import { item, active } from './Repo.module.sass';
import RepoInfo from '../RepoInfo';
import RepoDescription from '../RepoDescription';
import TinyCollapse from 'react-tiny-collapse';
import { connectProps } from './props';

const Repo = ({ repo, activeRepoId, updateActiveRepoId }) => {
  const { id, description } = repo;

  const handleClick = () => {
    updateActiveRepoId(id === activeRepoId ? 0 : id);
  };

  const preventMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const isActive = () => id === activeRepoId;

  return (
    <li
      onClick={handleClick}
      onMouseDown={preventMouseDown}
      className={`${item} ${isActive() && active}`}
    >
      <RepoInfo repo={repo} />
      <TinyCollapse isOpen={isActive()}>
        <RepoDescription description={description} />
      </TinyCollapse>
    </li>
  );
};

Repo.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string
  }),
  activeRepoId: PropTypes.number,
  updateActiveRepoId: PropTypes.func.isRequired
};

export default connectProps(Repo);
