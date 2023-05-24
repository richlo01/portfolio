import { defineConfig } from 'sanity';
import {deskTool} from "sanity/desk"; // Needs this plugin to view studio
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "t8hgcu6d",
    dataset: "production",
    title: "Next Sanity Studio",
    apiVersion: "2023-05-23",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})
// basePath: the location to where people can edit the content

export default config;