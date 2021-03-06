/**
 * Плагин-модификатор abstract-ui для metadata.js
 *
 * @module plugin
 *
 * Created 05.10.2016
 */

import meta from './meta';
import meta_objs from './meta_objs';
import log_manager from './log_manager';
import scheme_settings from './scheme_settings';

import mngrs from './mngrs';

/**
 * Экспортируем объект-плагин для модификации metadata.js
 */
export default {

  /**
   * ### Модификатор конструктора MetaEngine
   * Вызывается в контексте экземпляра MetaEngine
   */
  constructor() {

    meta_objs.call(this);
    log_manager.call(this);
    scheme_settings.call(this);
    mngrs.call(this);

  }
};
