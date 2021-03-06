export default function mngrs() {

  const {classes, msg} = this;

  Object.defineProperties(classes.DataManager.prototype, {

    /**
     * ### Имя семейства объектов данного менеджера
     * Примеры: "справочников", "документов", "регистров сведений"
     * @property family_name
     * @type String
     * @final
     */
    family_name: {
      get: function () {
        return msg.meta_mgrs[this.class_name.split('.')[0]].replace(msg.meta_mgrs.mgr + ' ', '');
      }
    },

    /**
     * ### Текст подсказки "открыть форму выбора"
     * @property frm_selection_name
     * @type String
     */
    frm_selection_name: {
      get: function () {
        return `${msg.open_frm} ${msg.selection_parent} ${msg.meta_parents[this.class_name.split('.')[0]]} '${this._meta.synonym || this._meta.name}'`;
      }
    },

    /**
     * ### Текст подсказки "открыть форму объекта"
     * @property frm_obj_name
     * @type String
     */
    frm_obj_name: {
      get: function () {
        return `${msg.open_frm} ${msg.obj_parent} ${msg.meta_parents[this.class_name.split('.')[0]]} '${this._meta.synonym || this._meta.name}'`;
      }
    }

  });


}
