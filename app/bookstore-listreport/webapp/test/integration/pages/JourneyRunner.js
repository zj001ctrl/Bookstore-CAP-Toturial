sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"bookstorelistreport/test/integration/pages/BooksList",
	"bookstorelistreport/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('bookstorelistreport') + '/test/flpSandbox.html#bookstorelistreport-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

