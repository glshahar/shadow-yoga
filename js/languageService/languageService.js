(function() {
    'use strict';

    angular
        .module('app')
        .factory('languagesService', ['appLanguage', 'lang_he', 'lang_en', languageService]);

    /**
     * Service in charge of the global application language
     * @param {*} appLanguage - The current application main language (Hebrew as default)
     * @param {*} langHeb - Hebrew language
     * @param {*} langEng - English language
     * @param {*} langRus - Russian language (TBD)
     */
    function languageService(appLanguage, langHeb, langEng) {
        var _languagesToValues = {
            'hebrew': langHeb,
            'english': langEng,
            'default': langHeb
        };

        return {
            getLanguage: getLanguage,
            setLanguage: setLanguage
        };

        /**
         * Sets the language of the application
         * @param {*} lang - The language to be used from now on (as described in _languagesToValues)
         */
        function setLanguage(lang) {
            if (lang && _languagesToValues[lang.toLowerCase()]) {
                appLanguage = lang;
            }
        }

        /**
         * Gets the language dictionary
         * @param {*String} lang - The language which we want to use (default as appLanguage, set in setLanguage)
         */
        function getLanguage(lang) {
            // This shouldn't be used directly,
            // And should be used by the translateFilter
            var actualLang = _languagesToValues[appLanguage];
            if (lang && _languagesToValues[lang.toLowerCase()]) {
                actualLang = _languagesToValues[lang.toLowerCase()];
            }
            return actualLang;
        }
    }
})();