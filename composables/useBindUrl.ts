import { useRoute, useRouter } from "vue-router";
import { Mode } from "~/composables/useLayoutMode";

export function useBindUrl(queryKey: string) {
   console.log("use bind url");
   const route = useRoute();
   const router = useRouter();
   const query = ref<string>((route.query[queryKey] as string) || "");

   const updateQueryParam = () => {
      router.push({
         hash: "#" + Mode.DEVELOP,
         query: {
            ...route.query,
            [queryKey]: query.value,
         },
      });
   };

   const setQueryParams = (obj: object) => {
      router.push({
         hash: "#" + Mode.DEVELOP,
         query: {
            ...route.query,
            ...obj,
         },
      });
   };

   watch(
      () => route.query[queryKey],
      (newQuery) => {
         query.value = (newQuery as string) || "";
      },
   );

   return {
      query,
      updateQueryParam,
      setQueryParams,
   };
}
