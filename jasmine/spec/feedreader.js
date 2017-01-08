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


         /* If the allFeeds function is cleared or the contents are 
         * cleared the tests will fail because the test is checking
         * to see if allFeeds is defined and the length is greater 
         * than 0. 
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('feed URLs are defined', function() {
            allFeeds.forEach(function(allFeeds) {
                expect(allFeeds.url).toBeDefined();
                expect(allFeeds.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('feed names are defined', function(){
            allFeeds.forEach(function(allFeeds){
                expect(allFeeds.name).toBeDefined();
                expect(allFeeds.name.length).not.toBe(0);
            });
         });
    });


    /* This is a new test suite named "The menu" */
    describe('The menu', function() {
        /* This is a test that ensures the menu element is
         * hidden by default. 
         */

        it('is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden');
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: the menu is displayed when
          * clicked and it hides when clicked again.
          */

        it('shows menu on click', function(){
            $('a.menu-icon-link').trigger('click');
            expect(document.body.className).not.toContain('menu-hidden');
        });

        it('hides menu on click', function(){
            $('a.menu-icon-link').trigger('click');
            expect(document.body.className).toContain('menu-hidden');
        });

    });


    /* This is a test suite named "Initial Entries" */
    describe('Inital Entries', function() {
        

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * LoadFeed() is asynchronous so this test uses Jasmine's beforeEach
         * and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('should load 1+ inital entries', function() {
            entry = $('.feed .entry').length;
            expect(entry).toBeGreaterThan(0);
        });
     });

    /* This is a new test suite named "New Feed Selection"*/

    describe('New Feed Selection', function() {

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * LoadFeed() is asynchronous.
         */
         var feedContent;
         var newContent;

         beforeEach(function(done) {
            loadFeed(0, function() {
                feedContent = $('.feed').html();
                done();
            });
         });

         it('should load new content', function(done) {
            loadFeed(1, function() {
                newContent = $('.feed').html();
               	expect(feedContent).not.toBe(newContent);
               	done();

            });

         });

    });
}());
