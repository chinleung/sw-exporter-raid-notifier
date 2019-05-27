const notifier = require('node-notifier');

module.exports = {
    defaultConfig: {
        enabled: true,
    },
    pluginName: 'RaidNotifier',
    pluginDescription: 'Receive a notification when the raid run has finished.',
    init (proxy, config) {
        if (config.Config.Plugins[this.pluginName].enabled) {
            proxy.on('BattleRiftOfWorldsRaidResult', (request, response) => {
                notifier.notify({
                    title: 'Summoners War',
                    message: 'The raid run has finished.',
                });
            });
        }
    },
};
