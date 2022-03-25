function getTags(myText) {
    const htmlRegex = /(<\w*>)/g;
    const allMatches = [];
    if (htmlRegex.test(myText)) {
        myText.match(htmlRegex).forEach(function (currentMatch) {
            allMatches.push(currentMatch.replace(/<|>/g, ''));
        });
    }
    // OR a one-liner:
    // if (htmlRegex.test(myText)) myText.match(htmlRegex).forEach(currentMatch => allMatches.push(currentMatch.replace(/<|>/g, '')));

    return allMatches;
};

const tagsFound = getTags('<h1>hello<b>world!</b></h1>');
if (tagsFound.length) console.log(`Found HTML tags ${tagsFound}`);
else console.log('No HTML tags were found');
