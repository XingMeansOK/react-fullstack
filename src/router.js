/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Router from 'universal-router';
import routes from './routes';

export default new Router(routes, {
  resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(action => action.default(context, params));
      // 此处load方法中执行了一个import('路径')，返回了一个promise对象
      // 目前看来这个promise的返回值（会作为参数传入到then方法中，这里也就是action）就是import的导入的文件内容

    }
    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }
    return null;
  },
});
