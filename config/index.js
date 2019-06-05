let config = require('./config.json');

//static data to don't have to generate the config_data 2 times
let config_data = null;

module.exports = function () {

    // if the static data was already set. return it
    if (config_data != null && config_data != undefined) {
        return config_data
    }

    config_data = {};

    //LOAD JSON
    if (process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development') {
        config_data = config.development;

        //LOAD FROM ENV VARIABLES
        config_data.server.host = config_data.server.ip;
        config_data.server.port = process.env.PORT || config_data.server.port;

    } else {
        if (process.env.NODE_ENV == 'production') {

            config_data = config.production;

            //LOAD FROM ENV VARIABLES
            config_data.server.host = config_data.server.ip;
            config_data.server.port = process.env.PORT || config_data.server.port;

        } else {
            if (process.env.NODE_ENV == 'staging') {
                config_data = config.staging;

                //LOAD FROM ENV VARIABLES
                config_data.server.host = config_data.server.ip;
                config_data.server.port = process.env.PORT || config_data.server.port;

            }
        }
    }
    return config_data;
};