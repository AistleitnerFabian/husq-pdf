import {program} from 'commander';
import * as fs from "fs";
import {compileFromFile} from "json-schema-to-typescript";

const cwd = process.cwd()
const encoding = "utf8"

function action(name, opts) {
    const assetsDir = `${cwd}/public/pdf/${name}`
    const schemaPath = `${assetsDir}/schema.json`
    const typesPath = `${cwd}/types/pdf/${name}`
    const vuePath = `${cwd}/pages/pdf/${name}.vue`

    function generateTypes() {
        if(!fs.existsSync(typesPath)) fs.mkdirSync(typesPath)
        const typesFile = `${typesPath}/index.ts`

        compileFromFile(schemaPath)
            .then(ts => fs.writeFileSync(typesFile, ts))
            .catch(err => program.error("failed to compile schema file: ", err))
    }

    function generateVuePage() {
        const template = `<template>

</template>

<script setup lang="ts">
  import { type Schema } from "@/types/pdf/${name}"
  import {usePageData} from "@/composeables/usePageData";
  let pageData = () => usePageData<Schema>()
</script>`

        fs.writeFile(vuePath, template, { encoding }, err => {
            if(err) {
                program.error(`failed to write file ${schemaPath}: `, err.message);
            }

            console.log(`successfully created ${schemaPath}`)
        })
    }

    if(!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir)
    }

    if(opts.types) {
        return generateTypes()
    }

    if(opts.page) {
        return generateVuePage()
    }
}

program.command("gen")
    .description('Generate files to create a pdf file')
    .argument('<name>', 'name of the pdf file')
    .option('--types', 'generate typescript types based on schema')
    .option('--page', 'generate the vue page')
    .action(action)

program.parse();