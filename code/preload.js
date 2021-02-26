"use strict";
const preload_list = ["icons/error.png"];
module.exports = async function preload(client) {
    for (const path of preload_list) {
        if (!client.icon_metas[path]) {
            await client.enqueue_icon_meta_load(client, path);
        }
    }
};
