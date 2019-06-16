<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

# @raydeck/xcode

Ray Deck's fork fo the amazing work the [Cordova](https://gthub.com/cordova/cordova-node-xcode) team and [Alan Lunny]((https://github.com/alunny/node-xcode) before them put in on the pbxproject parser module. Building block for doing a lot more to support the manipulation of Xcode projects from javascript - expecially for react native

## Example

```javascript
// API is a bit wonky right now
const xcode = require('xcode'),
const { writeFileSync } = fs = require('fs'),
const projectPath = 'myproject.xcodeproj/project.pbxproj',
const myProj = xcode.project(projectPath);
// parsing is async, in a different process
myProj.parseSync()
myProj.addHeaderFile('foo.h');
myProj.addSourceFile('foo.m');
myProj.addFramework('FooKit.framework');
writeFileSync(projectPath, myProj.writeSync());
console.log('new project written');
```

## License

Apache V2
