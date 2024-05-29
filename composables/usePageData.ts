import { parseQuery } from "~/utils/parseQuery";

export function usePageData<T>(): T {
   const route = useRoute();
   return parseQuery(route.query) as T;
}

export function watchPageData<T>() {
   const route = useRoute();
   const pageData: T = usePageData();
   const pageDataRef = ref(pageData);

   watch(
      () => route.query,
      () => (pageDataRef.value = usePageData()),
   );

   return pageDataRef;
}
