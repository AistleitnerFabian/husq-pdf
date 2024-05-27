
import * as qs from 'qs'
export const toQueryString = (object: Object): String => {
    return qs.stringify(object)
};
