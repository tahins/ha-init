module.exports = function (api) {
    api.cache(true);
    return {
        "plugins": [
            [require("@babel/plugin-transform-react-jsx"), { "pragma": "h" }],
            [require("@babel/plugin-proposal-object-rest-spread")]
        ],
        "presets": [
            require("@babel/preset-env"),
        ]
    }
}