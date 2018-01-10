# Project Overview

In this project there is a web-based application that reads RSS feeds. This application is tested by using [Jasmine](http://jasmine.github.io/) for some states.

# How to run this tests

 You can download this repository or simply clone it and run it in your browser.

 The tests added to the website is written in feedreader.js file inside jasmine folder. You can include more tests or comment them out to try them and break it to see how it works.

# About the tests

The first tests are about RSS feeds; we check if the rss feeds in the feeds array has a valid url, valid name or defined.

In url testing step I have found regex charset to test my url if they are valid. You check it further from this link; https://gist.github.com/dperini/729294

Second, we test the menu to see if it works as designed. The aim is to have the menu hidden first, then when it is clicked it will appear and if someone clicks once more it will be hidden again.

to test the state of a click, trigger 'click' function is used!

Third test is about the initial entries, here we check if loadFeed works and it brings entry elements under the parent .feed element.

And last test is more complicated, it checks loadFeed function by checking the new feeds with the old feeds and whether the new feeds are replaced in the website.
