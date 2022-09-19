import axios from 'axios';

export const makeRequest = (options) => {
    const request = () => axios(options);

    return new Promise(function (resolve, reject) {
        request()
            .then(resolve)
            .catch(reject)
    })
};

// Below is an example of use:
// const receiveResponse = (response) => {
//     // handle data
// }

// const receiveResponse = (error) => {
//     // handle data
// }
// const getGitHubRepos = (receiveResponse, receiveError) => {
//     const options = {
//         method: 'get',
//         url: 'https://api.github.com/search/repositories?=tomato'
//     };
    
//     return makeRequest(options)
//         .then(receiveResponse)
//         .catch(receiveError)
// };
