import {Input} from "~/components/ui/input";
import {Checkbox} from "~/components/ui/checkbox";
import StringSetting from "~/components/string-setting/string-setting.vue";
import ArraySettings from "~/components/array-settings/ArraySettings.vue";
import ObjectSettings from "~/components/object-settings/ObjectSettings.vue";


export const previewComponents: {[key: string]: any} = {
    "string": StringSetting,
    "int": Input,
    "boolean": Checkbox,
    "array": ArraySettings,
    "object": ObjectSettings
}