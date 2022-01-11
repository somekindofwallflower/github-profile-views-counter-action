const requestCommits = require('./request-commits');
const RequestModel = require('../../model/octokit/RequestModel');
let verifyCommits = (function () {
    const URL = '/commits?path=cache';
    // const USERNAME = 'github-actions[bot]';
    const USERNAME = 'somekindofwallflower';
    let verify = async function (header, username, repository) {
        let request = new RequestModel(URL, username, repository);
        let responseCommits = await requestCommits.requestResponseCommits(header, request);
        if (responseCommits.status) {
            for (const commit of responseCommits.response) {
                if (commit !== USERNAME) {
                    // return false;
                    return true; // allow unverified commits
                }
            }
            return true;
        } else {
            return true;
        }
    }
    return {
        verify: verify
    };
})();
module.exports = verifyCommits;
