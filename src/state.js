import { reactive } from 'vue'

import axios from '../node_modules/axios'

export const state = reactive({
    url: 'http://127.0.0.1:8000/api/projects',
    projects: null,
    last_page: null,
    project: null,
    message: null,
    apiCall(postApiPage) {
        axios
            .get(this.url, {
                params: {
                    page: postApiPage
                }
            })
            .then(response => {
                this.projects = response.data.result.data
                this.last_page = response.data.result.last_page
                //console.log(response.data)
                //console.log(this.projects)
            });
    },
    apiCallSingle(urlSingle) {
        axios
            .get(this.url + urlSingle)
            .then(response => {
                console.log(response)
                if (response.data.status == "failure") {
                    this.message = response.data.result;
                } else {
                    this.project = response.data.result;
                }
            });
    },
})