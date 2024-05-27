
import * as qs from 'qs'
import {stringifyQuery} from "vue-router";
export const parseQuery = (query: LocationQuery): Object => {
    return qs.parse(stringifyQuery(query))
};
