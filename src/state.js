import { reactive } from 'vue'

import axios from '../node_modules/axios'

export const state = reactive({
    url: 'http://127.0.0.1:8000/api/project',
    urlTech: 'http://127.0.0.1:8000/api/technolog',
    projects: null,
    last_page: null,
    project: null,
    technologies: null,
    technology: null,
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
                //console.log(response.data.result)
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
    apiTechnologies() {
        axios
            .get(this.urlTech + 'ies')
            .then(response => {
                //console.log(response)
                this.technologies = response.data.result;
            })
            .catch(err => console.log(err.message));
    },
    apiTechnologiesSingle(urlSingle, router) {
        axios
            .get(this.urlTech + 'y' + urlSingle)
            .then(response => {
                //console.log(response.data.result)
                if (response.data.status == "success") {
                    this.technology = response.data.result;
                    console.log(this.technology.projects)
                } else {
                    //this.message = response.data.result;
                    console.log('not found')
                    router.push({ name: 'NotFound' });
                }

            })
            .catch(err => console.log(err.message));
    },
})