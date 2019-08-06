import { ofType, combineEpics } from 'redux-observable';
import {
  map,
  mergeMap,
  tap,
  mapTo,
  switchMap,
  ignoreElements
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { fetchRepos, onReposFetched, updateRepos } from 'store/repo';
import { firstPage } from 'store/table';
import { stopLoading, updateError } from 'store/ui';
import { fetchReposCall } from 'services';

const fetchReposEpic = action$ =>
  action$.pipe(
    ofType(fetchRepos),
    switchMap(() => fetchReposCall()),
    map(repos => onReposFetched(repos))
  );

const onReposFetchedEpic = action$ =>
  action$.pipe(
    ofType(onReposFetched),
    mergeMap(({ payload }) => {
      if (!Array.isArray(payload)) {
        console.log(payload);
        return [stopLoading(), updateError(payload.message)];
      }

      const repos = payload.map(
        ({ id, name, description, stargazers_count: stars }) => ({
          id,
          name,
          description,
          stars
        })
      );

      return [stopLoading(), updateRepos(repos), firstPage()];
    })
  );

export default combineEpics(fetchReposEpic, onReposFetchedEpic);
