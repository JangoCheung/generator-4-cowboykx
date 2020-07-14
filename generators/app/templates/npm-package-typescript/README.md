# @ali/miniapp-simulator-sdk

## usage

```javascript
// commonjs
const { paramsBuilder } = require('@ali/miniapp-simulator-sdk');
// es6
import { paramsBuilder } from '@ali/tb-miniapp-basic';

try {
  const params = await paramsBuilder(projectRootPath);
  const postParams = {...otherParams, ...params};
} catch(err) {
  // handler error
}
```
