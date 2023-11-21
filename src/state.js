import { reactive } from 'vue'

import axios from '../node_modules/axios'

export const state = reactive({
    url: 'http://127.0.0.1:8000/api/project',
    projects: null,
    last_page: null,
    project: null,
    //message: null,
    apiCall(postApiPage) {
        axios
            .get(this.url + 's', {
                params: {
                    page: postApiPage
                }
            })
            .then(response => {
                //console.log(response)
                this.projects = response.data.result.data
                this.last_page = response.data.result.last_page
            })
            .catch(err => console.log(err.message));
    },
    apiCallSingle(urlSingle, router) {
        axios
            .get(this.url + urlSingle)
            .then(response => {
                //console.log(response)
                if (response.data.status == "success") {
                    this.project = response.data.result;
                } else {
                    //this.message = response.data.result;
                    console.log('not found')
                    router.push({ name: 'NotFound' });
                }

            })
            .catch(err => console.log(err.message));
    },
    apiCallLatest(urlLatest) {
        axios
            .get(this.url + 's' + urlLatest)
            .then(response => {
                //console.log(response)
                this.projects = response.data.result;
            })
            .catch(err => console.log(err.message));
    },
})