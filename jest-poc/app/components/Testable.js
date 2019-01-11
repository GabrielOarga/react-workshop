import {
    testableFunc,
    TEST,
    TESTABLE
} from "../utils/consts";

const initialState = {
    testable: {
        testString: "",
        testArray: []
    }
};

export const testFunc = () => {
    console.log(TEST);
    console.log(TESTABLE);
    console.log(initialState);

    return testableFunc();
};
