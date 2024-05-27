import ArraySettings from "~/components/array-settings/ArraySettings.vue";
import ObjectSettings from "~/components/object-settings/ObjectSettings.vue";
import BooleanSettings from "~/components/boolean-settings/BooleanSettings.vue";
import NumberSettings from "~/components/number-settings/NumberSettings.vue";
import StringSettings from "~/components/string-settings/StringSettings.vue";

export const previewComponents: {[key: string]: any} = {
    "string": StringSettings,
    "int": NumberSettings,
    "boolean": BooleanSettings,
    "array": ArraySettings,
    "object": ObjectSettings
}