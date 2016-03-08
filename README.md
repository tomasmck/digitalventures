[![Build Status](https://travis-ci.org/tomasmck/digitalventures.svg?branch=master)](https://travis-ci.org/tomasmck/digitalventures)

# BCG Digital Ventures
## Date Calculator

A node.js command line application that will calculate the number of full days that have passed between two dates.

Partial days are not included, this means that the start and end date specified will not be included in the calculation.

### Installation
Clone the repo locally and run the following in the root directory:
```js
  npm install -g
```

### Usage
```
  days <startDate> <endDate>
```

### Examples

```
  $ days 02/06/1983 22/06/1983
  Total number of days: 19
```

```
  $ days 04/07/1984 25/12/1984
  Total number of days: 173
```
The following example specifies the end date first, this is handled by the app.
```
  $ days 03/01/1989 03/08/1983
  Total number of days: 1979
```

### Running tests

The unit tests can be run by navigating to the root and running the following command:
```
  npm test
```

### Mutation testing

For an application that requires high confidence in , like this one, it's important we know that our tests aren't giving us false positives. This is where mutation testing comes in.
Mutation testing will change lines of your source code in order to test that your tests will fail, thus assessing the quality of our unit tests.

To run the mutation test locally:
```
  npm install grunt-cli
  grunt
```

### License

The MIT License (MIT)

Copyright (c) 2016 Tomas McKinless

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.