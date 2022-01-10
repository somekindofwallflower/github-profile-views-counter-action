const core = require('@actions/core');
const git = require('../../core/git');
let commitGit = function () {
    // let INSIGHT_BOT_USERNAME = 'github-actions[bot]';
    // let INSIGHT_BOT_EMAIL = '41898282+github-actions[bot]@users.noreply.github.com';
    // let INSIGHT_BOT_USERNAME = 'somekindofwallflower';
    // let INSIGHT_BOT_EMAIL = 'someone.ana13@gmail.com';
    let commit = async function (message) {
        core.info(`Git Commit ${message}`)
        try {
            await git.commit('somekindofwallflower', 'someone.ana13@gmail.com', message);
        } catch (error) {
            core.info(error);
        }

    }
    return {
        commit: commit
    };
}();
module.exports = commitGit;
