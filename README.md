# Feed Reader Testing

### Overview

As a part of [Udacity's](http://www.udacity.com) Front-end Web Developer Nanodegree I was challenged to test the several functions within an application that was provieded.

### Getting Started

##### The Application

You can run this application locally by opening *index.HTM* in your browser.

My live version is linked [here](https://megdollar.github.io/Feed-Reader-Testing/)

This is a link to my GitHub [repo](https://github.com/megdollar/Feed-Reader-Testing)

### Jasmine Implementations

#### RSS Feeds

The first test suite tests the RSS feeds definitions to test that each allFeeds object has a defined URL that is not empty and a defined name that is not empty.

###### The Menu

The Menu test suite ensures that the menu element is hidden by default and then toggles visibility show/hidden when clicked. 

###### Initial Entries

Initial Entries test suite ensures that the loadFeed function runs async and completes its task with atleast one entry in the .feed container.

###### New Feed 

New Feed test suite tests when a new feed is loaded, ensuring the content changes.


