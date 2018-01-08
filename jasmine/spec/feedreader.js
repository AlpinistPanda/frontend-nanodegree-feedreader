/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
        * allFeeds variable has been defined and that it is not
        * empty. Experiment with this before you get started on
        * the rest of this project. What happens when you change
        * allFeeds in app.js to be an empty array and refresh the
        * page?
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
        * in the allFeeds object and ensures it has a URL defined
        * and that the URL is not empty.
        */

        it('has URL defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });


        /* A test that loops through each feed
        * in the allFeeds object and ensures it has a name defined
        * and that the name is not empty.
        */

        it('has name defined', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    $(function() {
        /* "The menu" test suite  */

        /* A test that ensures the menu element is
        * hidden by default.
        */

        describe('The menu', function() {

            it('is hidden', function() {
                // body element has a class menu-hidden by default which hides menu
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });

            /* A test that ensures the menu changes
            * visibility when the menu icon is clicked. This test
            * should have two expectations: does the menu display when
            * clicked and does it hide when clicked again.
            */

            it('changes visibility', function() {
                // The menu is hidden first but after the click trigger it becomes visible
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(false);
                // The second click trigger hides it back
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        });
    });
    /* "Initial Entries" test suite   */

    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */

        beforeEach(function(done) {
            loadFeed(0, done);    // test it after asynchronous part is loaded
        });

        it('at least single entry element', function() {
            expect($('.entry').length).not.toBe(0);
        });
    });

    /* "New Feed Selection" test suite  */
    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        let oldFeed, newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').text();
            });
            done();

        });

        it('content changes', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').text();
                expect(newFeed).not.toBe(oldFeed);
                done();
            });
        });
    });

}());
