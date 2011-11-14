About
=====

"Image slideshow" is a simple Chrome extension that displays images from a
specified source (picasaweb account) as an automatically-rotating slide show.
Use it in a kiosk-style configuration to make delightful rotating wall-art.


Usage
=====

To use the extension, clone the repository to a local directory and pull in
the slider submodule.

Launch Chrome, and do as follows:

* Select "Extensions" from the "Tools" menu.
* Enable the "Developer mode" checkbox in the top-right corner of the Extensions
  options page.
* Select "Load unpacked extension..." and navigate to the root directory of the
  repository (the directory containing the "manifest.json" file).
* The extension adds a "Start image slideshow" button to the toolbar. Select
  it, configure your picasa information, and click "Display slideshow." NOTE:
  You will need to have already logged into picasaweb; if you are not logged in,
  the extension will open picasaweb.google.com for you.

While the slideshow is displayed, the arrow keys will rotate forward and
backward.

Chrome can be set to fullscreen ("kiosk") mode by pressing F11 or clicking the
rightmost icon in the "Zoom" menu option (the square with opposing arrows in
two corners). This makes for an excellent picture-frame-style presentation.

Future Development
==================

* Non-stock icons.
* More image sources (flickr, shutterfly, img URLs).
* Resize images with aspect ratios that do not match window aspect ratio.
* Selection of other slider transitions / setting transition time.
* Randomized image order.

License
=======

Copyright 2011 Mark T. Tomczak

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
