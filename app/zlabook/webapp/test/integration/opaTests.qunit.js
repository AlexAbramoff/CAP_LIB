sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabook/test/integration/FirstJourney',
		'zlab/zlabook/test/integration/pages/BooksList',
		'zlab/zlabook/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabook') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);