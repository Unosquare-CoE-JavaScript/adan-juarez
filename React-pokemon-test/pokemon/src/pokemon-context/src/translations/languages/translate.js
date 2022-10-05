import { languages, languagesPrefix } from "../../constants/languages";


class Translate {
    dictionary = null;

    constructor() {

        this.byDefault = languages.EN;
        this.loadLanguage();

        return this;
    }

    parse(key) {
        try {
            if (this.dictionary === null)
                throw new Error(".parse() expected a dictionary valid, but not have nothing.");

            if (typeof key !== "string")
                throw new TypeError(".loadLanguage() expected a param of type string call key, but received a " + typeof key)

            if (this.dictionary.hasOwnProperty(key.toUpperCase())) {
                return this.dictionary[key];
            }

            throw new Error(".parse() I search for " + key + " but it doesn't exist in the dictionary");

        } catch (error) {

            console.log(error);

            return key;

        }

    }

    loadLanguage(code = this.byDefault.code) {

        try {

            if (typeof code !== "string") {
                throw new TypeError(".loadLanguage() expected a param of type string call code, but received a " + typeof code)
            }

            this.dictionary = require("./" + code + ".json");

            return true;

        } catch (error) {

            console.log(error);

            return false;
        }

    }

}

export default new Translate();
