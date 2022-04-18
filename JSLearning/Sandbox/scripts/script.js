
function learnJS(lang, callback) {
    console.log(`Im learning ${lang}`);
    console.log(callback());
}
function doneProcess() {
    console.log('Learning finished');
}

learnJS('JavaScript', doneProcess);