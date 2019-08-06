import React, { useEffect } from 'react';
import {
  wrapper,
  noResults,
  paginationWrapper
} from './ResultsBody.module.sass';
import { Repo } from 'components/RepositoryComponents';
import Error from 'helpers/Error';
import Loading from 'helpers/Loading';
import Pagination from 'components/Pagination';
import { connect } from 'react-redux';
import { fetchRepos } from 'store/repo';

const ResultsBody = ({ fetchRepos }) => {
  useEffect(() => {
    fetchRepos();
  }, []);

  return <div>Hello</div>;
};

export default connect(
  null,
  dispatch => ({ fetchRepos: () => dispatch(fetchRepos()) })
)(ResultsBody);
// export default ({ search, selectedValues }) => {
//   const searchPatten = new RegExp(search.replace(' ', '.+'), 'ig');
//   const { sortBy, resultsPerPage } = selectedValues;

//   useEffect(() => {
//     fetchRepos();
//   }, []);

//   const fetchRepos = () => {
//     fetch('https://api.github.com/users/facebook/repos?per_page=100', {
//       headers: {
//         Authorization: 'token bd0e43bee286d8c2fa8df45443e97c2e2f288857'
//       }
//     })
//       .then(res => res.json())
//       .then(json => {
//         setLoading(false);

//         if (!Array.isArray(json)) {
//           setError(json.message);
//           return;
//         }

//         const responseRepos = json.map(
//           ({ id, name, description, stargazers_count: stars }) => ({
//             id,
//             name,
//             description,
//             stars
//           })
//         );

//         setRepos(responseRepos);
//         firstPage();
//       });
//   };

//   const sorter = (repoA, repoB, key, transform) => {
//     transform = typeof transform === 'function' ? transform : value => value;

//     const valueA = transform(repoA[key]);
//     const valueB = transform(repoB[key]);

//     switch (true) {
//       case valueA < valueB:
//         return -1;
//       case valueA > valueB:
//         return 1;
//       default:
//         return 0;
//     }
//   };

//   const handleSort = (repoA, repoB, key) =>
//     key === 'name'
//       ? sorter(repoA, repoB, key)
//       : sorter(repoA, repoB, key, Number);

//   const processedRepos = repos
//     .filter(repo => repo.name.match(searchPatten))
//     .sort((repoA, repoB) => handleSort(repoA, repoB, sortBy));

//   const remainingPagedItems = processedRepos.length % resultsPerPage;
//   const maxPages =
//     ~~(processedRepos.length / resultsPerPage) + !!remainingPagedItems;

//   useEffect(() => {
//     if (page > maxPages) lastPage();
//     else if (page < 1) firstPage();
//   }, [resultsPerPage, maxPages]);

//   const pagedRepos = processedRepos.slice(
//     (page - 1) * resultsPerPage,
//     page * resultsPerPage
//   );

//   const handlePageChange = pageNumber => {
//     switch (pageNumber) {
//       case -2:
//         previousPage();
//         break;
//       case -1:
//         nextPage();
//         break;
//       default:
//         goToPage(pageNumber);
//     }
//   };

//   const handleClick = repoId => {
//     activeRepoId === repoId ? setActiveRepoId(0) : setActiveRepoId(repoId);
//   };

//   return (
//     <Error error={error}>
//       <Loading loading={loading}>
//         <ul className={wrapper}>
//           {pagedRepos.length < 1 ? (
//             <p className={noResults}>No results</p>
//           ) : (
//             pagedRepos.map(repo => (
//               <Repo
//                 key={repo.id}
//                 repo={repo}
//                 isActive={repo.id === activeRepoId}
//                 handleClick={handleClick}
//               />
//             ))
//           )}
//         </ul>
//         <div className={paginationWrapper}>
//           <Pagination
//             page={page || 1}
//             maxPages={maxPages}
//             handlePageChange={handlePageChange}
//           />
//         </div>
//       </Loading>
//     </Error>
//   );
// };
