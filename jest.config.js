module.exports = {
    modulePathIgnorePatterns: [`/.node_modules.+/`],
    testPathIgnorePatterns: [`/node_modules/`, `/.node_modules.+/, /*.css/`],
    setupFiles: ["<rootDir>/test/setup/shim.js", "<rootDir>/test/setup/enzyme-adapter.js"],
    moduleNameMapper: {
        "\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js"
    }
};