import { computed } from 'vue'
export enum Mode {
    PREVIEW = 'preview',
    DEVELOP = 'develop',
    RENDER = 'default'
}

export const useLayoutMode = () => {
    const route = useRoute();

    const hash = computed(() => route.hash);

    return computed(() => {
        switch (hash.value) {
            case '#preview':
                return Mode.PREVIEW;
            case '#develop':
                return Mode.DEVELOP;
            default:
                return Mode.RENDER;
        }
    });
}