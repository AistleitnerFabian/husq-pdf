import {useRoute, useRouter} from "vue-router";
import {Mode} from "~/composables/useLayoutMode";

export function useBindUrl(queryKey: string) {
    const route = useRoute()
    const router = useRouter()
    const query = ref(route.query[queryKey] || '')

    const updateQueryParam = () => {
        router.push({
            hash: "#" + Mode.DEVELOP,
            query: {
                ...route.query,
                [queryKey]: query.value
            }
        })
    }

    watch(
        () => route.query[queryKey],
        (newQuery) => {query.value = newQuery || ''}
    )

    return {
        query,
        updateQueryParam
    }
}